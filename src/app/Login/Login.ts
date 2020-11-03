import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    ExportedClass as FormUtils
} from '../scripts/custom/FormUtils';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Login.html',
    selector: 'page-login',
    styleUrls: ['Login.scss']
})
export class Login {
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
    }
    @ViewChild('loginForm_el', {
        static: false
    }) public loginForm_el;
    @ViewChild('loginForm', {
        static: true
    }) public loginForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
    }
    ngOnInit() {
        this.pageNgOnInit__j_497();
    }
    async pageNgOnInit__j_497(event ? , currentItem ? ) {
        /* Run TypeScript */
        const databaseId = this.Apperyio.config.get("SecuritySettings.database_id");
        if (databaseId == 'SPECIFY YOUR DATABASE ID') {
            const alert = await this.Apperyio.getController("AlertController").create({
                header: 'Alert',
                subHeader: 'Database Id is not specified',
                message: 'Please open SecuritySettings and specify your database id as database_id property',
                buttons: ['OK']
            });
            await alert.present();
        }
        console.log('login screen');
        this.formUtils.showPasswordOnClick('page-login');
    }
    async loginformNgSubmit__j_506(event ? , currentItem ? ) {
        if (this.loginForm.valid) {
            /* Invoke data service */
            this.invokeService_login();
        }
    }
    async signinbuttonClick__j_513(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    private $aio_dataServices = {
        "login": "invokeService_login"
    }
    invokeService_login(cb ? : Function) {
        this.Apperyio.getService("LoginService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'loginForm', 'ionic4form', 'formData'));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': true,
                        'keyboardClose': true,
                        'message': 'Logging in...',
                        'mode': 'ios',
                        'showBackdrop': true,
                        'spinner': 'lines',
                        'translucent': true,
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        await this.$aio_mappingHelper.setServiceDataValue("sessionToken_0", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('NiceTabs');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Present Toast */
                        await (async () => {
                            let options = {
                                'animated': true,
                                'color': 'danger',
                                'duration': 3000,
                                'header': 'Login Error!',
                                'message': 'Incorrect login attempt. Username or password is wrong. Please try again.',
                                'mode': 'ios',
                                'position': 'top',
                                'translucent': false,
                                'buttons': []
                            }
                            let controller = this.Apperyio.getController('ToastController');
                            const toast = await controller.create(options);
                            return await toast.present();
                        })();
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                    }
                )
            }
        );
    }
}
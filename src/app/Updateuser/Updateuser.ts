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
import Swal from 'sweetalert2';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Updateuser.html',
    selector: 'page-updateuser',
    styleUrls: ['Updateuser.scss']
})
export class Updateuser {
    public updateuserID: string;
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
    @ViewChild('signUpForm_el', {
        static: false
    }) public signUpForm_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password', 'uname']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_48();
    }
    async pageIonViewWillEnter__j_48(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_updateuserme();
    }
    async signupformNgSubmit__j_55(event ? , currentItem ? ) {
        if (this.signUpForm.valid) {
            /* Invoke data service */
            this.invokeService_updateaccount();
        }
    }
    private $aio_dataServices = {
        "updateuserme": "invokeService_updateuserme",
        "updateaccount": "invokeService_updateaccount"
    }
    invokeService_updateuserme(cb ? : Function) {
        this.Apperyio.getService("User_me_service").then(
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
                headers = this.$aio_mappingHelper.updateData(headers, ['X-Appery-Session-Token'], this.$aio_mappingHelper.getServiceDataValue("sessionToken_0", []));
                /* Present Loading */
                await (async () => {
                    let options = {}
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
                        mappingData.j_56__value = () => this.$aio_mappingHelper.getSubdata(res, ["firstName"]);
                        mappingData.j_58__value = () => this.$aio_mappingHelper.getSubdata(res, ["lastName"]);
                        mappingData.j_60__value = () => this.$aio_mappingHelper.getSubdata(res, ["username"]);
                        mappingData.j_62__value = () => this.$aio_mappingHelper.getSubdata(res, ["uname"]);
                        this.updateuserID = this.$aio_mappingHelper.updateData(this.updateuserID, [], this.$aio_mappingHelper.getSubdata(res, ["_id"]));
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_updateaccount(cb ? : Function) {
        this.Apperyio.getService("User_user_update_service").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));;
                params = this.$aio_mappingHelper.updateData(params, ['_id'], this.$aio_mappingHelper.getSubdata(this.updateuserID, []));
                /* Present Loading */
                await (async () => {
                    let options = {}
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
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Run TypeScript */
                        Swal.fire({
                            title: "Your account is updated!",
                            text: "",
                            icon: 'success',
                            confirmButtonColor: '#1AB9FF',
                            confirmButtonText: "Ok"
                        })
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Profile');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}
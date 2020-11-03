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
    templateUrl: 'Repassword.html',
    selector: 'page-repassword',
    styleUrls: ['Repassword.scss']
})
export class Repassword {
    public user: any;
    public id: string;
    public randomPassword: string;
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
    @ViewChild('email_el', {
        static: false
    }) public email_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['email']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        this.randomPassword = retVal;
        console.log(this.randomPassword);
    }
    async button1_copy2Click__j_533(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_findUser();
    }
    private $aio_dataServices = {
        "resetmailing": "invokeService_resetmailing",
        "findUser": "invokeService_findUser",
        "updateUser": "invokeService_updateUser"
    }
    invokeService_resetmailing(cb ? : Function) {
        this.Apperyio.getService("MailgunEmail_Mailgun_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                params = this.$aio_mappingHelper.updateData(params, ["subject"], 'Reset Password');
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['to'], ((value) => {
                    var str = value + ",info@runrundeals.com"
                    return str;
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'email', 'ionic4input', 'value')));
                params = this.$aio_mappingHelper.updateData(params, ['text'], ((value) => {
                    var text =
                        `Hi, 

<div>Your password is updated to '<span style="font-weight:700">${this.randomPassword}</span>'. You can change your password later on the 'profile' page if you want.</div>

<div>
<span>Your New Password: <span style="font-weight:700">${this.randomPassword}</span></span>
</div>

`;
                    return text;
                })(this.$aio_mappingHelper.getSubdata(this.randomPassword, [])));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Run TypeScript */
                        Swal.fire({
                            title: "Reset Password",
                            html: `Your password will be sent to your e-mail address as soon as possible. Please don't forget to check your e-mail.`,
                            icon: 'success',
                            confirmButtonColor: '#1AB9FF',
                            confirmButtonText: "OK"
                        })
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
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
    invokeService_findUser(cb ? : Function) {
        this.Apperyio.getService("User_user_query_service").then(
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
                params = this.$aio_mappingHelper.updateData(params, ['where'], ((value) => {
                    return '{"username":"' + value + '"}';
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'email', 'ionic4input', 'value')));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.user = this.$aio_mappingHelper.updateData(this.user, [], this.$aio_mappingHelper.getSubdata(res, []));
                        /* Run TypeScript */
                        if (this.user[0] != undefined) {
                            this.id = this.user[0]._id;
                        }
                        /* Invoke data service */
                        this.invokeService_updateUser();
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
    invokeService_updateUser(cb ? : Function) {
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
                params = this.$aio_mappingHelper.updateData(params, ['_id'], this.$aio_mappingHelper.getSubdata(this.id, []));
                data = this.$aio_mappingHelper.updateData(data, ["password"], this.$aio_mappingHelper.getSubdata(this.randomPassword, []));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Invoke data service */
                        this.invokeService_resetmailing();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Run TypeScript */
                        Swal.fire({
                            title: "Couldn't reset password!",
                            html: `No user registered with this email address was found. Please check again and try again`,
                            icon: 'warning',
                            confirmButtonColor: '#1AB9FF',
                            confirmButtonText: "OK"
                        })
                    }
                )
            }
        );
    }
}
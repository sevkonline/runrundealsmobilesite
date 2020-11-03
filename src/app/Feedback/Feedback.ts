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
    templateUrl: 'Feedback.html',
    selector: 'page-feedback',
    styleUrls: ['Feedback.scss']
})
export class Feedback {
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
    @ViewChild('message_el', {
        static: false
    }) public message_el;
    @ViewChild('email_el', {
        static: false
    }) public email_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'email', 'message']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
    }
    async signupformNgSubmit__j_625(event ? , currentItem ? ) {
        if (this.signUpForm.valid) {
            /* Invoke data service */
            this.invokeService_feedback();
            /* Invoke data service */
            this.invokeService_feedbackmail();
        }
    }
    private $aio_dataServices = {
        "feedback": "invokeService_feedback",
        "feedbackmail": "invokeService_feedbackmail"
    }
    invokeService_feedback(cb ? : Function) {
        this.Apperyio.getService("todoDB_feedbacks_create_service").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
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
                            title: "Feedback",
                            text: "Your feedback is sended. Thank you your feedback.",
                            icon: 'success',
                            confirmButtonColor: '#1AB9FF',
                            confirmButtonText: "Ok"
                        })
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('NiceTabs');
                        /* Invoke data service */
                        this.invokeService_feedbackmail();
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
    invokeService_feedbackmail(cb ? : Function) {
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
                params = this.$aio_mappingHelper.updateData(params, ["to"], 'info@runrundeals.com');
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['text'], this.$aio_mappingHelper.getComponentPropValue.call(this, 'message', 'ionic4input', 'value'));
                params = this.$aio_mappingHelper.updateData(params, ['subject'], ((value) => {
                    return "Sent From Contact Page: " + value;
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'email', 'ionic4input', 'value')));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
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
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
    templateUrl: 'Report.html',
    selector: 'page-report',
    styleUrls: ['Report.scss']
})
export class Report {
    public title: string;
    public id: string;
    public img: string;
    public reportcount: number;
    public email: string;
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
    @ViewChild('j_323', {
        static: false
    }) public j_323;
    @ViewChild('message_el', {
        static: false
    }) public message_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
        this.id = this.Apperyio.getRouteParam("id");
        this.title = this.Apperyio.getRouteParam("title");
        this.img = this.Apperyio.getRouteParam("img");
        this.reportcount = this.Apperyio.getRouteParam("reports");
    }
    async mailIonChange__j_326(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.email = event.target.value;
    }
    async sendbtnClick__j_331(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_reportCount();
        /* Invoke data service */
        this.invokeService_reportMailer();
    }
    private $aio_dataServices = {
        "reportMailer": "invokeService_reportMailer",
        "reportCount": "invokeService_reportCount"
    }
    invokeService_reportMailer(cb ? : Function) {
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
                params = this.$aio_mappingHelper.updateData(params, ['subject'], ((value) => {
                    return "From: " + this.email + " Product ID:" + value;
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_323', 'ionic4text', 'text')));
                params = this.$aio_mappingHelper.updateData(params, ['text'], ((value) => {
                    return "Problem Detail: " + value;
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'message', 'ionic4input', 'value')));
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
                            title: "Report",
                            text: "Thank you for reporting this product to us. We will fix this problem as soon as possible and get back to you.",
                            icon: 'success',
                            confirmButtonColor: '#1AB9FF',
                            confirmButtonText: "Ok"
                        })
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
    invokeService_reportCount(cb ? : Function) {
        this.Apperyio.getService("RESTlikeupdate").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                /* Run TypeScript */
                this.reportcount++;
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['_id'], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_323', 'ionic4text', 'text'));
                data = this.$aio_mappingHelper.updateData(data, ["reports"], this.$aio_mappingHelper.getSubdata(this.reportcount, []));
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
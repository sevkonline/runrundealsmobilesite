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
import Swal from 'sweetalert2';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'pushPage.html',
    selector: 'page-push-page',
    styleUrls: ['pushPage.scss']
})
export class pushPage {
    public taskList: any;
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_453();
    }
    async pageIonViewWillEnter__j_453(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_featured();
    }
    async button4_copy2Click__j_473(event ? , currentItem ? ) {
        /* Run TypeScript */
        event.preventDefault();
        //let val = await this.Apperyio.data.getStorage("sessionToken_0");
        //console.log(val);
        function goToSite() {
            window.open(url, '_system', 'location=yes');
        }
        //if(val!=undefined || val!=null){
        var code = event.target.id;
        var url = event.target.href;
        Swal.fire({
            title: "Copied Coupon!",
            html: `<span style="border: 4px dotted green;padding:5px;font-size:18px;font-weight:700" class="code-wrapper">${code}</span>`,
            icon: 'success',
            confirmButtonColor: '#1AB9FF',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: "Go to Product"
        }).then((result) => {
            if (result.value) {
                goToSite();
            }
        })
        //}else{
        // this.Apperyio.navigateTo("Login"/*, Oturum yoksa login sayfasına yönlen*/);
        //}
    }
    private $aio_dataServices = {
        "featured": "invokeService_featured"
    }
    invokeService_featured(cb ? : Function) {
        this.Apperyio.getService("RESTFeatured").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': true,
                        'keyboardClose': true,
                        'message': 'Loading Deals...',
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
                        this.taskList = this.$aio_mappingHelper.updateData(this.taskList, [], this.$aio_mappingHelper.getSubdata(res, []));
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
}
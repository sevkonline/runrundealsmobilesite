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
    templateUrl: 'Search.html',
    selector: 'page-search',
    styleUrls: ['Search.scss']
})
export class Search {
    public searchtext: string;
    public filterService: any;
    public price: number;
    public discount: number;
    public category: string;
    public limit: number = 30;
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
        this.pageIonViewWillEnter__j_340();
    }
    async pageIonViewWillEnter__j_340(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async search1IonChange__j_344(event ? , currentItem ? ) {
        /* Run TypeScript */
        let value = event.target.value;
        this.searchtext = value;
        console.log(this.searchtext);
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async checkbox1IonChange__j_345(event ? , currentItem ? ) {
        /* Run TypeScript */
        if (event.target.checked) {
            this.price = 15;
        } else {
            this.price = 99;
        }
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async checkbox2IonChange__j_346(event ? , currentItem ? ) {
        /* Run TypeScript */
        if (event.target.checked) {
            this.discount = 50;
        } else {
            this.discount = 1;
        }
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async select1IonChange__j_348(event ? , currentItem ? ) {
        /* Run TypeScript */
        var cat = event.target.value;
        this.category = cat;
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async button10Click__j_369(event ? , currentItem ? ) {
        /* Run TypeScript */
        document.getElementsByTagName('ion-checkbox')[0].checked = false;
        document.getElementsByTagName('ion-checkbox')[1].checked = false;
        this.category = "";
        this.price = 99;
        this.discount = 1;
        this.searchtext = "";
        /* Invoke data service */
        this.invokeService_filterService();
    }
    async button4_copy1Click__j_387(event ? , currentItem ? ) {
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
            html: `<span style="border: 5px dotted green;padding:5px;font-size:18px;font-weight:700" class="code-wrapper">${code}</span>`,
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
        "filterService": "invokeService_filterService"
    }
    invokeService_filterService(cb ? : Function) {
        this.Apperyio.getService("RESTSearch").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                params = this.$aio_mappingHelper.updateData(params, ["_sort"], 'reports:ASC');
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['title_contains'], ((value) => {
                    var val = this.searchtext;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.searchtext, [])));
                params = this.$aio_mappingHelper.updateData(params, ['price_lte'], ((value) => {
                    var val = 1;
                    val = this.price;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.price, [])));
                params = this.$aio_mappingHelper.updateData(params, ['discount_gte'], ((value) => {
                    var val = 50;
                    val = this.discount;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.discount, [])));
                params = this.$aio_mappingHelper.updateData(params, ['category_contains'], ((value) => {
                    var val = this.category;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.category, [])));
                params = this.$aio_mappingHelper.updateData(params, ['_limit'], ((value) => {
                    var val = this.limit;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.limit, [])));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.filterService = this.$aio_mappingHelper.updateData(this.filterService, [], this.$aio_mappingHelper.getSubdata(res, []));
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
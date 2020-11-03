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
    templateUrl: 'Home.html',
    selector: 'page-home',
    styleUrls: ['Home.scss']
})
export class Home {
    public taskList: any;
    public searchtext: string;
    public userID: string;
    public _id: number;
    public like: number;
    public disslike: number;
    public featuredItems: any;
    public itemCount: number;
    public primeDeals: any;
    public today: string;
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
    search() {
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.Apperyio.execDataService(this, "taskList");
            this.Apperyio.execDataService(this, "featuredItems");
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_74();
    }
    async pageIonViewWillEnter__j_74(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_taskList();
        /* Invoke data service */
        this.invokeService_featuredItems();
    }
    async button4_copy1Click__j_104(event ? , currentItem ? ) {
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
    async search1IonChange__j_127(event ? , currentItem ? ) {
        /* Run TypeScript */
        let value = event.target.value;
        this.searchtext = value;
        /* Invoke data service */
        this.invokeService_taskList();
    }
    private $aio_dataServices = {
        "taskList": "invokeService_taskList",
        "updateLike": "invokeService_updateLike",
        "featuredItems": "invokeService_featuredItems"
    }
    invokeService_taskList(cb ? : Function) {
        this.Apperyio.getService("restapi").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                params = this.$aio_mappingHelper.updateData(params, ["_sort"], 'createdAt:DESC');
                params = this.$aio_mappingHelper.updateData(params, ["_limit"], '500');
                params = this.$aio_mappingHelper.updateData(params, ["_start"], '0');
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['title_contains'], ((value) => {
                    var val = this.searchtext;
                    return val;
                })(this.$aio_mappingHelper.getSubdata(this.searchtext, [])));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'message': 'Loading Deals...',
                        'mode': 'ios',
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
                        /* Run TypeScript */
                        var length = this.taskList.length
                        var d = new Date();
                        var n = d.toISOString();
                        var date = n.substring(0, 10);
                        let sayac = 0;
                        for (var i = 0; i < length; i++) {
                            if (this.taskList[i].createdAt.substring(0, 10) === date) {
                                sayac++;
                            }
                        }
                        this.itemCount = sayac;
                        this.today = date;
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
    invokeService_updateLike(cb ? : Function) {
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
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['_id'], this.$aio_mappingHelper.getSubdata(this._id, []));
                data = this.$aio_mappingHelper.updateData(data, ["like"], this.$aio_mappingHelper.getSubdata(this.like, []));
                data = this.$aio_mappingHelper.updateData(data, ["disslike"], this.$aio_mappingHelper.getSubdata(this.disslike, []));
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
    invokeService_featuredItems(cb ? : Function) {
        this.Apperyio.getService("RESTFeatured").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                params = this.$aio_mappingHelper.updateData(params, ["_limit"], '10');
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.featuredItems = this.$aio_mappingHelper.updateData(this.featuredItems, [], this.$aio_mappingHelper.getSubdata(res, []));
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
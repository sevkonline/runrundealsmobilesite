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
    templateUrl: 'TodayDeals.html',
    selector: 'page-today-deals',
    styleUrls: ['TodayDeals.scss']
})
export class TodayDeals {
    public todayList: any = [];
    public primeDeals: any;
    public sort: string = "hotcount:DESC";
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
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.Apperyio.execDataService(this, "todayList");
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_254();
    }
    async pageIonViewWillEnter__j_254(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_todayList();
        /* Invoke data service */
        this.invokeService_prime();
    }
    async button4_copy1Click__j_279(event ? , currentItem ? ) {
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
    async button6Click__j_306(event ? , currentItem ? ) {
        /* Run TypeScript */
        var btn = document.querySelector('.ratingbtn');
        btn.setAttribute("fill", "solid");
        var btn2 = document.querySelector('.hotbtn');
        btn2.setAttribute("fill", "outline");
        this.sort = "rating:DESC";
        /* Invoke data service */
        this.invokeService_todayList();
    }
    async button6_copyClick__j_308(event ? , currentItem ? ) {
        /* Run TypeScript */
        var btn = document.querySelector('.hotbtn');
        btn.setAttribute("fill", "solid");
        var btn2 = document.querySelector('.ratingbtn');
        btn2.setAttribute("fill", "outline");
        this.sort = "hotcount:DESC";
        /* Invoke data service */
        this.invokeService_todayList();
    }
    private $aio_dataServices = {
        "todayList": "invokeService_todayList",
        "prime": "invokeService_prime"
    }
    invokeService_todayList(cb ? : Function) {
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
                params = this.$aio_mappingHelper.updateData(params, ["_limit"], '500');
                params = this.$aio_mappingHelper.updateData(params, ["_start"], '0');
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['_sort'], this.$aio_mappingHelper.getSubdata(this.sort, []));
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
                        this.todayList = this.$aio_mappingHelper.updateData(this.todayList, [], this.$aio_mappingHelper.getSubdata(res, []));
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
    invokeService_prime(cb ? : Function) {
        this.Apperyio.getService("primedeals").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.primeDeals = this.$aio_mappingHelper.updateData(this.primeDeals, [], this.$aio_mappingHelper.getSubdata(res, []));
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
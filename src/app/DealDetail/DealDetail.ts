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
    templateUrl: 'DealDetail.html',
    selector: 'page-deal-detail',
    styleUrls: ['DealDetail.scss']
})
export class DealDetail {
    public title: string;
    public img: string;
    public discount: string;
    public price: string;
    public code: string;
    public url: string;
    public oldprice: string;
    public expire: number;
    public description: string;
    public category: string;
    public like: number;
    public disslike: number;
    public _id: string;
    public hotcount: number;
    public isPrime: boolean;
    public reports: number;
    public detailDeals: any;
    public imageToShare: any = 'https://images-na.ssl-images-amazon.com/images/I/51mF41lJKTL.png';
    public bottom_description: string;
    public extraDescription: string;
    public star: string;
    public rating: string;
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
        this.title = this.Apperyio.getRouteParam("title");
        this.img = this.Apperyio.getRouteParam("imgurl");
        this.discount = this.Apperyio.getRouteParam("discount");
        this.price = this.Apperyio.getRouteParam("price");
        this.code = this.Apperyio.getRouteParam("code");
        this.url = this.Apperyio.getRouteParam("url");
        this.oldprice = this.Apperyio.getRouteParam("old_price");
        this.expire = this.Apperyio.getRouteParam("expirationDate");
        this.description = this.Apperyio.getRouteParam("description");
        this.category = this.Apperyio.getRouteParam("category");
        this.like = this.Apperyio.getRouteParam("like");
        this.disslike = this.Apperyio.getRouteParam("disslike");
        this.hotcount = this.Apperyio.getRouteParam("hotcount");
        this._id = this.Apperyio.getRouteParam("_id");
        this.reports = this.Apperyio.getRouteParam("reports");
        this.isPrime = (this.Apperyio.getRouteParam("isPrime") === "true");
        this.isPrime = !this.isPrime;
        this.star = this.Apperyio.getRouteParam("star");
        this.rating = this.Apperyio.getRouteParam("rating");
        this.bottom_description = this.Apperyio.getRouteParam("bottom_description");
        this.extraDescription = this.Apperyio.getRouteParam("extraDescription");
        //date diff
        const date1: any = new Date();
        const date2: any = new Date(this.expire);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.expire = diffDays;
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    async radiobutton4IonSelect__j_667(event ? , currentItem ? ) {
        /* Run TypeScript */
        let doc = document.getElementsByClassName('like-radios')[0];
        let icons = doc.getElementsByTagName('ion-icon');
        icons[0].src = "assets/images/thumbs-up-hand-symbol.svg";
        doc.getElementsByTagName('ion-item')[1].disabled = true;
        var like = event.target.value;
        like++;
        this.like = like;
        event.target.disabled = true;
        let nodes = document.getElementsByClassName('like')[0];
        nodes.innerHTML = like;
        /* Invoke data service */
        this.invokeService_likeService();
    }
    async radiobutton5IonSelect__j_668(event ? , currentItem ? ) {
        /* Run TypeScript */
        let doc = document.getElementsByClassName('like-radios')[0];
        let icons = doc.getElementsByTagName('ion-icon');
        icons[1].src = "assets/images/hand.svg";
        doc.getElementsByTagName('ion-item')[0].disabled = true;
        var disslike = event.target.value;
        disslike++;
        this.disslike = disslike;
        event.target.disabled = true;
        let nodes = document.getElementsByClassName('disslike')[0];
        nodes.innerHTML = disslike;
        /* Invoke data service */
        this.invokeService_likeService();
    }
    async radiobutton6IonSelect__j_669(event ? , currentItem ? ) {
        /* Run TypeScript */
        //assets/images/d5b2a8b4cb3634c6fb40679bdb2a2f4d.svg
        let val = event.target.value;
        val++;
        this.hotcount = val;
        event.target.disabled = true;
        let doc = document.getElementsByClassName('like-radios')[0];
        let icons = doc.getElementsByTagName('ion-icon');
        icons[2].src = "assets/images/heart.svg";
        /* Invoke data service */
        this.invokeService_likeService();
    }
    async text9Click__j_675(event ? , currentItem ? ) {
        /* Run TypeScript */
        function isOS() {
            //can use a better detection logic here
            return navigator.userAgent.match(/ipad|iphone/i);
        }
        if (isOS()) {
            window.open("https://apps.apple.com/us/app/id1521848647", '_system', 'location=yes');
        } else {
            window.open("https://play.google.com/store/apps/details?id=io.appery.project673445", '_system', 'location=yes');
        }
    }
    async text7Click__j_684(event ? , currentItem ? ) {
        /* Run TypeScript */
        event.target.innerHTML = this.description;
    }
    async button4Click__j_694(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_socialShare();
    }
    async button3_copyClick__j_699(event ? , currentItem ? ) {
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
        "likeService": "invokeService_likeService",
        "detailDeals": "invokeService_detailDeals",
        "socialShare": "invokeService_socialShare"
    }
    invokeService_likeService(cb ? : Function) {
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
                data = this.$aio_mappingHelper.updateData(data, ["hotcount"], this.$aio_mappingHelper.getSubdata(this.hotcount, []));
                data = this.$aio_mappingHelper.updateData(data, ["reports"], this.$aio_mappingHelper.getSubdata(this.reports, []));
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
    invokeService_detailDeals(cb ? : Function) {
        this.Apperyio.getService("restapi").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                params = this.$aio_mappingHelper.updateData(params, ["_limit"], '10');
                params = this.$aio_mappingHelper.updateData(params, ["_sort"], 'hotcount:DESC');
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.detailDeals = this.$aio_mappingHelper.updateData(this.detailDeals, [], this.$aio_mappingHelper.getSubdata(res, []));
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
    invokeService_socialShare(cb ? : Function) {
        this.Apperyio.getService("SocialSharingService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                this.$aio_changeDetector.detectChanges();
                data = this.$aio_mappingHelper.updateData(data, ["subject"], 'Run Run Deals');
                data = this.$aio_mappingHelper.updateData(data, ["message"], 'Run Run Deals - Best Deals, Offers & Coupons');
                data = this.$aio_mappingHelper.updateData(data, ["url"], 'https://www.runrundeals.com/social/');
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["files"], ((value) => {
                    return [value];
                })(this.$aio_mappingHelper.getSubdata(this.imageToShare, [])));
                service.execute({
                    data: data
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
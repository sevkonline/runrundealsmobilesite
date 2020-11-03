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
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Profile.html',
    selector: 'page-profile',
    styleUrls: ['Profile.scss']
})
export class Profile {
    public firstName: string;
    public lastName: string;
    public userid: string;
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
        this.pageIonViewWillEnter__j_0();
    }
    async pageIonViewWillEnter__j_0(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_me();
    }
    async button3Click__j_36(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_logout();
        /* Run TypeScript */
        await this.Apperyio.data.setStorage("sessionToken_0", undefined);
    }
    private $aio_dataServices = {
        "me": "invokeService_me",
        "logout": "invokeService_logout"
    }
    invokeService_me(cb ? : Function) {
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
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        mappingData.j_3__text = () => this.$aio_mappingHelper.getSubdata(res, ["username"]);
                        mappingData.j_10__text = () => this.$aio_mappingHelper.getSubdata(res, ["_id"]);
                        mappingData.j_15__text = () => this.$aio_mappingHelper.getSubdata(res, ["username"]);
                        mappingData.j_20__text = () => this.$aio_mappingHelper.getSubdata(res, ["firstName"]);
                        mappingData.j_25__text = () => this.$aio_mappingHelper.getSubdata(res, ["lastName"]);
                        this.firstName = this.$aio_mappingHelper.updateData(this.firstName, [], this.$aio_mappingHelper.getSubdata(res, ["firstName"]));
                        this.lastName = this.$aio_mappingHelper.updateData(this.lastName, [], this.$aio_mappingHelper.getSubdata(res, ["lastName"]));
                        mappingData.j_30__text = () => this.$aio_mappingHelper.getSubdata(res, ["uname"]);
                        this.userid = this.$aio_mappingHelper.updateData(this.userid, [], this.$aio_mappingHelper.getSubdata(res, ["_id"]));
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
    invokeService_logout(cb ? : Function) {
        this.Apperyio.getService("LogoutService").then(
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
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Run TypeScript */
                        this.Apperyio.data.setVariable("sessionToken_0", null);
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('NiceTabs');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('NiceTabs');
                    }
                )
            }
        );
    }
}
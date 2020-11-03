import {
    Injectable,
    NgZone
} from '@angular/core';
import _ from "lodash";
import {
    Observable
} from "rxjs/Observable";
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    EntityApiService
} from '../apperyio/apperyio';
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

@Injectable()
class SocialSharingService {

    public message: string = null;
    public subject: string = null;
    public url: string = null;
    public files: any = [];

    public window: any = window;

    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private http: HttpClient, private ngZone: NgZone) {}
    execute(reqOpts ? : any) {
        console.log('Social sharing');

        return new Observable((observer) => {
            try {
                (async() => {
                    let srvName = await this.Apperyio.getGSNameByImpl(this);
                    if (!srvName) {
                        observer.error("Service was not found");
                        return;
                    }
                    let service = this.entityAPI.get(srvName),
                        echo = service.echo,
                        defaults = service.request.data,
                        request,
                        response;
                    if (_.isUndefined(echo)) {
                        /**
                         * Passed request data structure IS RECOMMENDED to match the default request, described in service!
                         * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
                         */
                        request = _.extend({}, defaults, reqOpts.data);

                        /**
                         * CUSTOM CODE for processing request and forming responce could be placed here
                         * Response structure IS RECOMMENDED to match default response, described in service!
                         * An example of forming an empty response:
                         */

                        console.log('request', request);

                        this.message = request.data && request.data.message ? request.data.message : request.message;
                        this.subject = request.data && request.data.subject ? request.data.subject : request.subject;
                        this.url = request.data && request.data.url ? request.data.url : request.url;
                        this.files = request.data && request.data.files ? request.data.files : request.files;

                        const options = {
                            message: this.message,
                            subject: this.subject,
                            files: this.files,
                            url: this.url
                        };

                        console.log('options', options);

                        if (this.window.cordova) {
                            this.window.plugins.socialsharing.shareWithOptions(options, (result) => {
                                console.log(result);

                                this.ngZone.run(() => {
                                    observer.next(result);
                                    observer.complete();
                                });

                            }, (e) => {
                                console.log('error', e);
                                
                                this.ngZone.run(() => {
                                    observer.error(e);
                                });
                            });
                        } else {
                            observer.next({
                                completed: false,
                                app: "ComponentInfo{com.google.android.gm/com.google.android.gm.ComposeActivityGmailExternal}"
                            });
                            observer.complete();
                        }

                    } else {
                        try {
                            echo = JSON.parse(echo);
                        } catch (e) {
                            console.log('error', e);
                            observer.error(e);
                        }

                        observer.next(echo);
                        observer.complete();
                    }
                })()
            } catch (e) {
                console.log('error', e);
                observer.error(e);
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    SocialSharingService as ExportedClass
};
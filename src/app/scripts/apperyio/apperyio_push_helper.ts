import {
    Injectable
} from '@angular/core';
import {
    checkAvailability
} from '@ionic-native/core';
import {
    Push,
    PushObject,
    PushOptions
} from '@ionic-native/push/ngx';
import {
    Platform
} from '@ionic/angular';
import {
    HttpClient,
    HttpParams,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import {
    catchError
} from 'rxjs/operators';
import {
    throwError
} from 'rxjs';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    pushSettings
} from '../constants';
const NOTIFICATION = "notification";
const ERROR = "error";
const REGISTER = "register";
const INIT = "init";
const END_POINT_URL = pushSettings.baseUrl;
const APP_ID = pushSettings.appID;
@Injectable()
export class ApperyioPushHelperService {
    private deviceToken: string;
    private pushObject: PushObject;
    private uuid: string;
    private httpOptions;
    private callbacks = {
        [NOTIFICATION]: [],
        [ERROR]: [],
        [REGISTER]: [],
        [INIT]: []
    }
    constructor(private push: Push, private http: HttpClient, private device: Device, private platform: Platform) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Appery-App-ID': APP_ID
            })
        };
    }
    private _execCallbacks(eventName: string, ...args) {
        let callbacks = this.callbacks[eventName];
        callbacks && callbacks.length && callbacks.forEach && callbacks.forEach(cb => cb.apply(null, args));
    }
    private _getTimeZone() {
        let offset = new Date().getTimezoneOffset();
        let hr = offset / (-60);
        let min = -offset - hr * 60;
        let tmin = '' + min;
        let timezone = 'UTC' + (hr > 0 ? '+' + hr : hr) + ':' + (tmin.length > 1 ? tmin : '0' + tmin);
        return timezone;
    }
    on(eventName, callback): ApperyioPushHelperService {
        if (this.callbacks[eventName]) {
            this.callbacks[eventName].push(callback);
        }
        return this;
    }
    off(eventName, callback ? ): ApperyioPushHelperService {
        if (this.callbacks[eventName]) {
            if (callback === undefined) {
                this.callbacks[eventName] = [];
                return this;
            }
            const index = this.callbacks[eventName].indexOf(callback);
            if (index !== -1) {
                this.callbacks[eventName].splice(index, 1);
            }
        }
        return this;
    }
    init(options ? ) {
        if (this.pushObject) return;
        this.platform.ready().then(() => {
            const isPushPluginEnabled = checkAvailability(this.push);
            if (isPushPluginEnabled && !( < any > isPushPluginEnabled).error) {
                this.push.hasPermission()
                    .then((res: any) => {
                        if (res.isEnabled) {
                            console.log('We have permission to send push notifications');
                            const options: PushOptions = pushSettings.initOptions;
                            if (this.pushObject && !options) return;
                            this.pushObject = this.push.init(options);
                            this.pushObject.on('notification').subscribe((notification: any) => {
                                this._execCallbacks(NOTIFICATION, notification);
                            });
                            this.pushObject.on('registration').subscribe((registration: any) => {
                                console.log('Device registered', registration);
                                this.deviceToken = registration.registrationId;
                                this._execCallbacks(INIT, registration);
                                this.register(options);
                            });
                            this.pushObject.on('error').subscribe(error => {
                                console.error('Error with Push plugin', error)
                            });
                        } else {
                            console.log('We do not have permission to send push notifications');
                        }
                    });
            }
        });
    }
    register(options: any = {}) {
        let device = this.device;
        if (device) {
            let deviceType = (device.platform === 'iOS') ? 'I' : 'A';
            this._setUuid(options.deviceID);
            if (deviceType && this.uuid && this.deviceToken) {
                let params = {
                    'type': deviceType,
                    'deviceID': this.uuid,
                    'token': this.deviceToken,
                    'timeZone': this._getTimeZone()
                };
                this.http.post(END_POINT_URL, { ...params,
                        ...options
                    }, this.httpOptions)
                    .pipe(
                        catchError(this.handleError)
                    )
                    .subscribe(res => this._execCallbacks(REGISTER, res));
            }
        }
    }
    private _setUuid(deviceID ? ) {
        if (deviceID) {
            this.uuid = deviceID;
        }
        if (!this.uuid) {
            let device = this.device;
            if (device) {
                this.uuid = device.uuid;
            }
        }
    }
    unregister() {
        this._setUuid();
        if (this.uuid) {
            this.http.delete(END_POINT_URL + '/' + this.uuid, this.httpOptions)
                .pipe(
                    catchError(this.handleError)
                )
                .subscribe(res => {
                    console.log(this.uuid + " unregistred");
                    this.uuid = undefined;
                });
        }
    }
    update(options: any = {}) {
        this._setUuid();
        if (this.uuid) {
            this.http.put(END_POINT_URL + '/' + this.uuid, options, this.httpOptions)
                .pipe(
                    catchError(this.handleError)
                )
                .subscribe(res => {
                    this._execCallbacks(REGISTER, res)
                    console.log(this.uuid + " updated");
                });
        }
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ' + error.status + ', body was: ' + error.error);
        }
        this._execCallbacks(ERROR, error);
        return throwError('Something bad happened; please try again later.');
    }
    setApplicationIconBadgeNumber(count) {
        if (this.pushObject) {
            return this.pushObject.setApplicationIconBadgeNumber(count);
        } else {
            return Promise.reject();
        }
    }
    getApplicationIconBadgeNumber() {
        if (this.pushObject) {
            return this.pushObject.getApplicationIconBadgeNumber();
        } else {
            return Promise.reject();
        }
    }
    clearAllNotifications() {
        if (this.pushObject) {
            return this.pushObject.clearAllNotifications();
        } else {
            return Promise.reject();
        }
    }
    getPushInstance() {
        return this.pushObject;
    }
};
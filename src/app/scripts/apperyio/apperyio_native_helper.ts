import {
    Injectable
} from '@angular/core';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
import {
    InAppBrowser
} from '@ionic-native/in-app-browser/ngx';
import {
    Push
} from '@ionic-native/push/ngx';
@Injectable()
export class ApperyioNativeHelperService {
    public audioinput;
    constructor(
        public webView: WebView, public device: Device, public splashScreen: SplashScreen, public statusBar: StatusBar, public keyboard: Keyboard, public inAppBrowser: InAppBrowser, public push: Push
    ) {
        this.audioinput = (window as any).audioinput;
    }
};
import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from './scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from './scripts/apperyio/apperyio_mapping_helper';
import {
    MenuController
} from '@ionic/angular';
import {
    NavController
} from '@ionic/angular';
import {
    Platform
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    AppRate
} from '@ionic-native/app-rate/ngx';
import {
    $aio_empty_object
} from './scripts/interfaces';
@Component({
    templateUrl: 'app.html',
    selector: 'app-root',
    styleUrls: ['app.scss']
})
export class app {
    public currentItem: any = null;
    public mappingData: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController, public appRate: AppRate) {
        // do not remove this code unless you know what you do
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let status bar overlay webview
            if (this.platform.is('android')) {
                statusBar.styleLightContent();
                statusBar.backgroundColorByHexString('#000000');
            }
            statusBar.overlaysWebView(false);
            // overlaysWebView must set to false if you change the background color in iOS with ionic (hence I am using backgroundColorByHexString method )
            statusBar.backgroundColorByHexString('#000000');
            // used above hex color code to set the status bar background color 
            statusBar.styleLightContent();
            // above function  will change the status bar content (icon , text)
            statusBar.show();
            // finally shows the status bar
            statusBar.show();
            // finally shows the status bar
            splashScreen.hide();
        });
        this.Apperyio.push.init();
    }
    async content2Click__j_597(event ? , currentItem ? ) {
        /* Menu close */
        this.Apperyio.getController("MenuController").close();
    }
    async listitem7_copy3Click__j_611(event ? , currentItem ? ) {
        /* Run TypeScript */
        window.open("https://runrundeals.com", '_system', 'location=yes');
    }
    async listitem7_copy4Click__j_614(event ? , currentItem ? ) {
        /* Run TypeScript */
        /*
         
          function isOS() {
            //can use a better detection logic here
            return navigator.userAgent.match(/ipad|iphone/i);
          }
          
          
          if (isOS()) {
               window.open("https://apps.apple.com/us/app/id1521848647",'_system','location=yes');
            } else {
              window.open("https://play.google.com/store/apps/details?id=io.appery.project673445",'_system','location=yes');
            }
            

          */
        //window.open("https://www.amazon.com/Run-Deals-Best-Offers-Coupons/dp/B08DCR3PM4",'_system','location=yes');
        function isOS() {
            //can use a better detection logic here
            return navigator.userAgent.match(/ipad|iphone/i);
        }
        if (isOS()) {
            this.appRate.promptForRating(true);
            // or, override the whole preferences object
            this.appRate.preferences = {
                usesUntilPrompt: 3,
                storeAppURL: {
                    ios: 'id1521848647',
                    android: 'https://play.google.com/store/apps/details?id=io.appery.project673445',
                }
            }
            this.appRate.promptForRating(false);;
        } else {
            this.appRate.promptForRating(true);
            // or, override the whole preferences object
            this.appRate.preferences = {
                usesUntilPrompt: 3,
                storeAppURL: {
                    android: 'market://details?id=io.appery.project673445',
                }
            }
        }
    }
}
import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from "./scripts/apperyio/apperyio.module";
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as SocialSharingService
} from './scripts/custom/SocialSharingService_Impl';
import {
    ExportedClass as SignupService
} from './scripts/services/SignupService';
import {
    ExportedClass as LogoutService
} from './scripts/services/LogoutService';
import {
    ExportedClass as LoginService
} from './scripts/services/LoginService';
import {
    ExportedClass as User_me_service
} from './scripts/services/User_me_service';
import {
    ExportedClass as todoDB_feedbacks_create_service
} from './scripts/services/todoDB_feedbacks_create_service';
import {
    ExportedClass as restapi
} from './scripts/services/restapi';
import {
    ExportedClass as RESTbyCategory
} from './scripts/services/RESTbyCategory';
import {
    ExportedClass as RESTSearch
} from './scripts/services/RESTSearch';
import {
    ExportedClass as todoDB_resetpassword_create_service
} from './scripts/services/todoDB_resetpassword_create_service';
import {
    ExportedClass as User_user_update_service
} from './scripts/services/User_user_update_service';
import {
    ExportedClass as RESTlikeupdate
} from './scripts/services/RESTlikeupdate';
import {
    ExportedClass as MailgunEmail_Mailgun_service
} from './scripts/services/MailgunEmail_Mailgun_service';
import {
    ExportedClass as RESTFeatured
} from './scripts/services/RESTFeatured';
import {
    ExportedClass as primedeals
} from './scripts/services/primedeals';
import {
    ExportedClass as User_user_query_service
} from './scripts/services/User_user_query_service';
import {
    ExportedClass as FormUtils
} from './scripts/custom/FormUtils';
import {
    InAppBrowser
} from '@ionic-native/in-app-browser/ngx';
import {
    Push
} from '@ionic-native/push/ngx';
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
    AppRate
} from '@ionic-native/app-rate/ngx';
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        InAppBrowser,
        Push,
        SocialSharingService,
        SignupService,
        LogoutService,
        LoginService,
        User_me_service,
        todoDB_feedbacks_create_service,
        restapi,
        RESTbyCategory,
        RESTSearch,
        todoDB_resetpassword_create_service,
        User_user_update_service,
        RESTlikeupdate,
        MailgunEmail_Mailgun_service,
        RESTFeatured,
        primedeals,
        User_user_query_service,
        FormUtils,
        AppRate
    ]
})
export class AppModule {}
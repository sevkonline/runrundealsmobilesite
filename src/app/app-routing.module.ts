import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    ExportedClass as SecurityGuard
} from './scripts/custom/SecurityGuard';
const routes: Routes = [{
        path: '',
        redirectTo: 'nicetabs',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './Home/Home.module#HomePageModule',
    },
    {
        path: 'profile',
        loadChildren: './Profile/Profile.module#ProfilePageModule',
        canActivate: [SecurityGuard],
    },
    {
        path: 'info',
        loadChildren: './Info/Info.module#InfoPageModule',
    },
    {
        path: 'nicetabs',
        loadChildren: './NiceTabs/NiceTabs.module#NiceTabsPageModule',
    },
    {
        path: 'todaydeals',
        loadChildren: './TodayDeals/TodayDeals.module#TodayDealsPageModule',
    },
    {
        path: 'category',
        loadChildren: './Category/Category.module#CategoryPageModule',
    },
    {
        path: 'signup',
        loadChildren: './SignUp/SignUp.module#SignUpPageModule',
    },
    {
        path: 'privacypolicy',
        loadChildren: './PrivacyPolicy/PrivacyPolicy.module#PrivacyPolicyPageModule',
    },
    {
        path: 'termsofservice',
        loadChildren: './TermsOfService/TermsOfService.module#TermsOfServicePageModule',
    },
    {
        path: 'categorylist',
        loadChildren: './CategoryList/CategoryList.module#CategoryListPageModule',
    },
    {
        path: 'dealdetail',
        loadChildren: './DealDetail/DealDetail.module#DealDetailPageModule',
    },
    {
        path: 'feedback',
        loadChildren: './Feedback/Feedback.module#FeedbackPageModule',
    },
    {
        path: 'search',
        loadChildren: './Search/Search.module#SearchPageModule',
    },
    {
        path: 'repassword',
        loadChildren: './Repassword/Repassword.module#RepasswordPageModule',
    },
    {
        path: 'updateuser',
        loadChildren: './Updateuser/Updateuser.module#UpdateuserPageModule',
    },
    {
        path: 'pushpage',
        loadChildren: './pushPage/pushPage.module#pushPagePageModule',
    },
    {
        path: 'report',
        loadChildren: './Report/Report.module#ReportPageModule',
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
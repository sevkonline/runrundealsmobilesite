import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    Routes
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    NiceTabs
} from './NiceTabs';
import {
    PipesModule
} from '../scripts/pipes.module';
import {
    DirectivesModule
} from '../scripts/directives.module';
import {
    ComponentsModule
} from '../scripts/components.module';
import {
    CustomModulesModule
} from '../scripts/custom-modules.module';
const routes: Routes = [{
    path: '',
    component: NiceTabs,
    children: [{
            path: 'Home',
            children: [{
                path: '',
                loadChildren: '../Home/Home.module#HomePageModule'
            }]
        },
        {
            path: 'TodayDeals',
            children: [{
                path: '',
                loadChildren: '../TodayDeals/TodayDeals.module#TodayDealsPageModule'
            }]
        },
        {
            path: 'Search',
            children: [{
                path: '',
                loadChildren: '../Search/Search.module#SearchPageModule'
            }]
        },
        {
            path: 'pushPage',
            children: [{
                path: '',
                loadChildren: '../pushPage/pushPage.module#pushPagePageModule'
            }]
        },
        {
            path: 'Category',
            children: [{
                path: '',
                loadChildren: '../Category/Category.module#CategoryPageModule'
            }]
        },
        {
            path: '',
            redirectTo: 'Home',
            pathMatch: 'full'
        }
    ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PageRoutingModule {}
@NgModule({
    declarations: [
        NiceTabs
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule, PageRoutingModule
    ],
    exports: [
        NiceTabs
    ]
})
export class NiceTabsPageModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
const routes: Routes = [
    {
        path: '', component: AppComponent,
        // children: [
        //     { path: '', pathMatch: 'full', redirectTo: 'vien' },
        //     { path: 'vien', loadChildren: () => import('./vien/vien.module').then(m => m.VienModule) },
        //     { path: 'second-menu', loadChildren: () => import('./second-menu/second-menu.module').then(m => m.SecondMenuModule) },
        //     { path: 'blank-page', component: BlankPageComponent },
        // ]

        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            // { path: 'orders', loadChildren: () => import('./second-menu/second-menu.module').then(m => m.SecondMenuModule) },

            { path: 'orders', component: OrdersComponent },
            { path: 'foodmenu', component: FoodmenuComponent },
            { path: 'settings', component: SettingsPageComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

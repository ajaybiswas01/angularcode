import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';


@NgModule({
  declarations: [
    BlankPageComponent,
    FoodmenuComponent,
    OrdersComponent,
    ProfileComponent,
    SettingsPageComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }


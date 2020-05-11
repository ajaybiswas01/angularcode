import { NgModule } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from './dashboard.component';
import { SecondMenuRoutingModule } from './dashboard.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [DashboardComponent, SecondComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    SecondMenuRoutingModule
  ]
})
export class DashboardModule { }

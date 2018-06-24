import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    TooltipModule.forRoot()
  ],
  declarations: [RequestDetailComponent, DashboardComponent, ContractDetailComponent, RequestCreateComponent]
})
export class DashboardModule { }

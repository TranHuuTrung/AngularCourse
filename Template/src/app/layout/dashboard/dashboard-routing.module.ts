import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestCreateComponent } from './request-create/request-create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'request-detail/:id',
    component: RequestDetailComponent
  },
  {
    path: 'contract-detail/:id',
    component: ContractDetailComponent
  },
  {
    path: 'request-create',
    component: RequestCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

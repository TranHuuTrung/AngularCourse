import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AccountsModule } from './accounts/accounts.module';
import { LayoutComponent } from './layout.component';
import { AccountsRegitrationComponent } from './accounts-regitration/accounts-regitration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccountsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    AccountsRegitrationComponent,
  ]
})
export class LayoutModule { }

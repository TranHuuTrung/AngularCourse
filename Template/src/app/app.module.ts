import { ApiConvertHelper } from './shared/helper/api-convert.helper';
import { AuthGuardService } from './shared/auth-guard.service';
import { JwtserviceService } from './shared/jwtservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApiService } from './shared/api.service';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    ApiConvertHelper,
    UserService,
    ApiService,
    JwtserviceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

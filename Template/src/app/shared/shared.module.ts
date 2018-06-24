import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { FramesComponent } from './component/frames/frames.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginHeaderComponent } from './component/login-header/login-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    HeaderComponent,
    FormsModule,
    LoginHeaderComponent,
    FooterComponent,
    FramesComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    FramesComponent,
    LoginHeaderComponent
  ]
})
export class SharedModule { }

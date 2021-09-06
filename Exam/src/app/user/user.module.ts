import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlashComponent } from './flash/flash.component';



@NgModule({
  declarations: [
    LoginComponent,
    FlashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

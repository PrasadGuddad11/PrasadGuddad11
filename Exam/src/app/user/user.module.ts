import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }

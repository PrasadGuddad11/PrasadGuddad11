import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';





@NgModule({
  declarations: [
    AppComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    QuestionsModule

  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

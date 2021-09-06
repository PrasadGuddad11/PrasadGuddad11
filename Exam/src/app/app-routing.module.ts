import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions/questions.component';
import { FlashComponent } from './user/flash/flash.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path:""       ,component:FlashComponent
  },
  {
    path:"flash"       ,component:FlashComponent
  },
  {
    path:"login"       ,component:LoginComponent
  },
  {
    path:"questions"       ,component:QuestionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
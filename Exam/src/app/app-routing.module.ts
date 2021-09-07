import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddoreditComponent } from './questions/addoredit/addoredit.component';
import { QualifiersComponent } from './questions/qualifiers/qualifiers.component';
import { QuestionsComponent } from './questions/questions/questions.component';
import { WorkspaceComponent } from './questions/workspace/workspace.component';
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
  },
  {
    path:"workspace"       ,component:WorkspaceComponent
  },
  {
    path:"addoredit"       ,component:AddoreditComponent
  },
  {
    path:"qualifiers"       ,component:QualifiersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

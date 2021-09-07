import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { QualifiersComponent } from './qualifiers/qualifiers.component';



@NgModule({
  declarations: [
    QuestionsComponent,
    QualifiersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuestionsModule { }

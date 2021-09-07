import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { QualifiersComponent } from './qualifiers/qualifiers.component';
import { AddoreditComponent } from './addoredit/addoredit.component';
import { SmartpickComponent } from './smartpick/smartpick.component';
import { ComposedviewComponent } from './composedview/composedview.component';
import { MenubarComponent } from './menubar/menubar.component';
import { WorkspaceComponent } from './workspace/workspace.component';



@NgModule({
  declarations: [
    QuestionsComponent,
    QualifiersComponent,
    AddoreditComponent,
    SmartpickComponent,
    ComposedviewComponent,
    MenubarComponent,
    WorkspaceComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestionsModule { }

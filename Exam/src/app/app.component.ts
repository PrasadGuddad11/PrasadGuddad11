import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
declare const M:any;
declare const firebase:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor(private router:Router) { }
  title = 'Exam';
  ngOnInit(): void {
    let config={
      apiKey: "AIzaSyB-YGUCjSBKCylGiO27qfncfeHF61l2rNw",
      authDomain: "smartcomposertool.firebaseapp.com",
      projectId: "smartcomposertool",
      storageBucket: "smartcomposertool.appspot.com",
      messagingSenderId: "999320084447",
      appId: "1:999320084447:web:7bce0f19bbae061185ee6a",
      measurementId: "G-KJJ0R5XVD6"
    }
    const app:any=firebase.initializeApp(config);
   
  }
  ngAfterViewChecked(){
    M.AutoInit();
    
  }
  moveTo(route:string){
    this.router.navigate([route])
  }
  writeQualifiers(){
    var qualfr={
      'id':new Date().valueOf(),
      'body':btoa((new Date().valueOf()).toString())+ "?",
      'desc':'Na',
      'options':'Na',
      'Marks':'-',
      'DifficultyLevel':'-',
      'QuestionType':'-',
      'ChapterNumber':'-',
      'ClassName':'-',
      'SubjectName':'-'
    }
    var database = firebase.database();
    database.ref('Questions/' + qualfr.id).set(qualfr);
  }
}

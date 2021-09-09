import { Component, OnInit } from '@angular/core';
declare const firebase:any;

@Component({
  selector: 'app-qualifiers',
  templateUrl: './qualifiers.component.html',
  styleUrls: ['./qualifiers.component.scss']
})
export class QualifiersComponent implements OnInit {

  constructor() { }
Qvals:any=[];
  ngOnInit(): void {
    
    firebase.database().ref('Qualifiers/').on('value', (snapshot:any) => {
      var Qvs:any=[];
      snapshot.forEach((childSnapshot:any) => {
        var temp:any=childSnapshot.val();
        if(temp.desc!="Na"){
          temp.desc=[temp.desc]
        }else{
          temp.desc=[];
        }
        if(temp.options!="Na"){
          temp.options=(temp.options).split('&&');
        }else{
          temp.options=[];
        }
        Qvs.push(temp);
      });
      this.Qvals=Qvs;
      console.log(this.Qvals);
    });
  }

}

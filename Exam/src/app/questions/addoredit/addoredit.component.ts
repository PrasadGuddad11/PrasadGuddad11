import { Component, OnInit } from '@angular/core';
declare const firebase:any;
@Component({
  selector: 'app-addoredit',
  templateUrl: './addoredit.component.html',
  styleUrls: ['./addoredit.component.scss']
})
export class AddoreditComponent implements OnInit {

  constructor() { }
  Qvals:any=[];
  
  ngOnInit(): void {
    firebase.database().ref('Questions/').on('value', (snapshot:any) => {
      var Qvalst:any=[];
      snapshot.forEach((childSnapshot:any) => {
        Qvalst.push(childSnapshot.val());
      });
      this.Qvals=Qvalst;
    });
  }

}

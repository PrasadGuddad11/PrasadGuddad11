import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartpick',
  templateUrl: './smartpick.component.html',
  styleUrls: ['./smartpick.component.scss']
})
export class SmartpickComponent implements OnInit {

  constructor() { }
 tab:number=1;
  ngOnInit(): void {
  }
  move(i:number){
    this.tab=i;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.redirect();
    },3000);
  }
  redirect(){
    this.router.navigate(['workspace'])
  }

}

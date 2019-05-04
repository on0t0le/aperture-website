import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.css']
})
export class LemonComponent implements OnInit {
 
  position = "above";

  constructor() { }

  ngOnInit() {    
  }

  setTab(item: any){    
    if(item % 2){
      this.position = "below";
    } else {
      this.position="above";
    }
  }

}

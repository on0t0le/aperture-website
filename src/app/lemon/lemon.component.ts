import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.css']
})
export class LemonComponent implements OnInit {

  cards: number[] = [];
  private position = "above";

  constructor() { }

  ngOnInit() {
    for (let c = 0; c < 10; c++) {
      this.cards.push(c);
    }
  }

  setTab(item: any){    
    if(item % 2){
      this.position = "below";
    } else {
      this.position="above";
    }
  }

}

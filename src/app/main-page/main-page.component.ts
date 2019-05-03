import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  items: string[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i.toString());
    }
  }



}

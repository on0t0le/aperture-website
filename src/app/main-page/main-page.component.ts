import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {    
  }

  readyToTest(testname: string){
    if(testname){
      console.log(testname);
      this.snackBar.open(testname,"READY!",{duration: 2000});
    }
  }
}

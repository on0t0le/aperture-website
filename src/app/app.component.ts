import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btn_name = "open";
  opened: boolean = false;

  changeSidenav() {
    this.opened = !this.opened;
  }
}

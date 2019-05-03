import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btn_name = "open";
  opened: boolean = false;
  aperture: boolean = false;
  cube: boolean = false;
  like: boolean = false;

  changeSidenav() {
    this.opened = !this.opened;
  }
  
  initAperture(){
    if(!this.cube && !this.like){
      this.aperture = true;
    } else {
      this.toDefaults();
    }
  }

  initCube() {
    if (this.aperture && !this.like) {
      this.cube = true;
    } else {
      this.toDefaults();
    }
  }

  initLike(){
    if (this.aperture && this.cube) {
      this.toDefaults();
      this.opened = !this.opened;
    } else {
      this.toDefaults();
    }
  }

  toDefaults() {
    this.aperture = false;
    this.cube = false;
    this.like = false;
  }
}

import {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year
  constructor(private router: Router) {
    this.year = new Date().getFullYear()
  }
  isHome(){
    return this.router.url == "/"
  }
}

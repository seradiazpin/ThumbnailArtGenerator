import { WebapiService } from './servicers/webapi.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl
  constructor(private api:WebapiService) {

  }

  generateRandom(){
     this.api.generateRandom().subscribe(data =>{
      this.imageUrl = data;
    })
  }
}

import { WebapiService } from './../../servicers/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css']
})
export class MixComponent implements OnInit {
  seed1: number = 0 
  seed2: number = 100
  imagesUrl = {}
  mixType = 0
  constructor(private api: WebapiService) { }


  ngOnInit() {
  }
  mix() {
    console.log(this.seed1, this.seed2);

    this.api.mix({ "seed1": this.seed1, "seed2": this.seed2 ,"style":this.mixType}).subscribe(data => {
      this.imagesUrl = data;
    });
  }
  getImgUrl(imgTag) {
    return this.imagesUrl[imgTag];
  }
}

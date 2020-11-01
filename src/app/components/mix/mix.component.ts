import { WebapiService } from './../../servicers/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css']
})
export class MixComponent implements OnInit {
  seed1: number = this.getRandomInt(0,99999)
  seed2: number = this.getRandomInt(0,99999);
  imagesUrl = {}
  mixType = 3
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

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomSeed(){
    this.seed1 = this.getRandomInt(0,99999)
    this.seed2  = this.getRandomInt(0,99999);
    
  }
}

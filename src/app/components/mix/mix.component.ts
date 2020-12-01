import { WebapiService } from './../../services/webapi.service';
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
  mixType = 0
  loading;
  help = false;
  constructor(private api: WebapiService) { }


  ngOnInit() {
  }
  mix() {
    this.loading = true;
    this.api.mix({ "seed1": this.seed1, "seed2": this.seed2 ,"style":this.mixType}).subscribe(data => {
      this.imagesUrl = data;
      this.loading = false;
    });
  }
  getImgUrl(imgTag) {
    if(this.imagesUrl[imgTag]){
      return this.imagesUrl[imgTag];
    }
  }
  getDownloadUrl(imgTag) {
    if(this.imagesUrl[imgTag]){
      return this.imagesUrl[imgTag].link;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  randomSeed1(){
    this.seed1 = this.getRandomInt(0,99999);
  }
  randomSeed2(){
    this.seed2 = this.getRandomInt(0,99999);
  }
  randomSeed(){
    this.seed1 = this.getRandomInt(0,99999)
    this.seed2  = this.getRandomInt(0,99999);
    
  }
  swapSeeds(){
    let seed1Copy = this.seed1;
    this.seed1 = this.seed2;
    this.seed2 = seed1Copy;
  }
  selectStyle(style){
    this.mixType = style
  }
}

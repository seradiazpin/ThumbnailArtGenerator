import { WebapiService } from './../../services/webapi.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent {

  imageData;
  seed1;
  loading;
  constructor(private api: WebapiService) {
    this.seed1 = this.getRandomInt(0,99999)
  }

  generateRandom() {
    this.api.generateRandom().subscribe(data => {
      this.imageData = data;
    })
  }
  generate() {
    this.loading = true;
    this.api.generate({"seed":this.seed1}).subscribe(data => {
      this.imageData = data ;
      this.loading = false;
    })
  }

  /*processVector(vector){
    this.generate({"latent_vector": vector})
  }*/
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  randomSeed(){
    this.seed1 = this.getRandomInt(0,99999)
    
  }
}

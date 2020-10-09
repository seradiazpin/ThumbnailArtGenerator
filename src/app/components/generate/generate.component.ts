import { WebapiService } from './../../servicers/webapi.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent {

  imageUrl: string = ""
  constructor(private api: WebapiService) {

  }

  generateRandom() {
    this.api.generateRandom().subscribe(data => {
      this.imageUrl = data as string;
    })
  }
  generate(data) {
    this.api.generate(data).subscribe(data => {
      this.imageUrl = data as string;
    })
  }

  processVector(vector){
    this.generate({"latent_vector": vector})
  }

}

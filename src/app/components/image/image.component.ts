import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
  @Input() title: string  = ""
  @Input() imageData
  placeholder: string = "img/placeholder.png"
  constructor( private domSanitizer: DomSanitizer) { }

  getImg() {
    if(this.imageData && this.imageData !== ''){
      return this.domSanitizer.bypassSecurityTrustUrl(this.imageData["link_small"]);
    }else{
      return this.placeholder;
    }

  }
}

import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
  @Input() title: string  = ""
  @Input() src: string = ""
  placeholder: string = "img/placeholder.png"
  constructor( private domSanitizer: DomSanitizer) { }

  getImg() {
    if(this.src && this.src !== ''){
      return this.domSanitizer.bypassSecurityTrustUrl(this.src);
    }else{
      return this.placeholder;
    }

  }
}

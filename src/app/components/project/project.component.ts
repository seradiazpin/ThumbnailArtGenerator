import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebapiService } from './../../servicers/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  fileToUpload: File = null;
  imagesUrl: SafeUrl[] = []
  originalUrl
  constructor(private api: WebapiService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.originalUrl = window.URL.createObjectURL(this.fileToUpload);
  }

  projectImage(){
    this.imagesUrl = []
    this.api.project(this.fileToUpload).subscribe(data=>{
      data.forEach(element => {
        this.imagesUrl.push(element as string);
      });
      
    })
  }

  placeholder: string = "img/placeholder.png"
  getImg() {
    if(this.originalUrl && this.originalUrl !== ''){
      return this.domSanitizer.bypassSecurityTrustUrl(this.originalUrl);
    }else{
      return this.placeholder;
    }

  }

  getbs64(src) {
    if(src && src !== ''){
      return this.domSanitizer.bypassSecurityTrustUrl(src);
    }else{
      return this.placeholder;
    }

  }

}

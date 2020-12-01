import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebapiService } from 'src/app/services/webapi.service';

@Component({
  selector: 'app-projectmix',
  templateUrl: './projectmix.component.html',
  styleUrls: ['./projectmix.component.css']
})
export class ProjectmixComponent implements OnInit {
  fileToUpload: File = null;
  imagesUrl: SafeUrl[] = []
  originalUrl
  constructor(private api: WebapiService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.originalUrl = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileToUpload));
    console.log(this.originalUrl);
  }

  projectImage(){
    this.imagesUrl = []
    this.api.project(this.fileToUpload).subscribe(data=>{
      data.forEach(element => {
        this.imagesUrl.push(this.domSanitizer.bypassSecurityTrustUrl(element as string));
      });
      
    })
  }
}

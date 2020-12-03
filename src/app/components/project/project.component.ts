import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  fileToUpload: File = null;
  imagesUrl = {};
  originalUrl;
  loading;
  loadingMix;
  imageData;
  seed = "No id";
  seed2;
  mixType=0;
  helpVideo;

  constructor(private api: WebapiService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.randomSeed2();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.originalUrl = window.URL.createObjectURL(this.fileToUpload);
  }

  projectImage(){
    this.loading = true;
    this.api.project(this.fileToUpload).subscribe(data=>{
      this.imageData = data;
      this.seed = data["seed"]
      this.loading = false;
    })
  }
  mixProjection(){
    this.loadingMix = true;
    this.api.projectmix({"seed1": this.seed2, "style": this.mixType, "id_image":this.seed}).subscribe(data=>{
      this.imagesUrl = data;
      this.loadingMix = false;
    })
  }

  getImgUrl(imgTag) {
    if(this.imagesUrl[imgTag]){
      return this.imagesUrl[imgTag];
    }
  }
//88a38be7-ed83-4e32-8627-9945098a07d8
//69956

  placeholder: string = "img/placeholder.png"
  getImg() {
    if(this.originalUrl && this.originalUrl !== ''){
      return this.domSanitizer.bypassSecurityTrustUrl(this.originalUrl);
    }else{
      return this.placeholder;
    }

  }
  selectStyle(style){
    this.mixType = style
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  randomSeed2(){
    this.seed2 = this.getRandomInt(0,99999);
  }

}

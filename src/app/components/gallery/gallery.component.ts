import { WebapiService } from 'src/app/services/webapi.service';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = []
  next_id = null
  previous_id = null
  next_active = false
  previous_active = false
  first = null
  page = 0
  preview
  loading;
  constructor(private api:WebapiService, private downloads: DownloadService) { }
  query(page){
    this.loading = true;
    this.api.gallery({"page":page,"size":16}).subscribe(data=>{
      this.images = data
      this.first = data[0].id
      if(page == 0){
        this.previous_id = null
      }
      if(this.previous_id == null){
        this.previous_active = false
      }else{
        
        this.previous_active = true
      }
      this.next_id = data[data.length-1].id
      if(data.length === 16){
        this.next_active = true
      }else{
        this.next_active = false
      }
      this.loading = false;
    })
  }
  ngOnInit() {
    this.query(null);
  }
  next(){
    this.previous_id = this.first
    this.query(this.next_id);
    this.page++
  }
  prev(){
    this.query(this.previous_id);
    this.page--
  }
  previewImage(image){
    this.preview= image;
  }

  download(url, name): void {
    this.downloads
      .download(url)
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = name+'.png';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
  }
}

import { WebapiService } from 'src/app/servicers/webapi.service';
import { Component, OnInit } from '@angular/core';

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
  preview = {}
  constructor(private api:WebapiService) { }
  query(page){
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
}

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
  constructor(private api:WebapiService) { }
  query(page){
    this.api.gallery({"page":page,"size":16}).subscribe(data=>{
      this.images = data
      this.next_id = data[data.length-1].id
      this.previous_id = data[0].id
      console.log(this.next_id)
      console.log(this.previous_id)
    })
  }
  ngOnInit() {
    this.query(null);
  }
  next(){
    this.query(this.next_id);
  }
  prev(){
    this.query(this.previous_id);
  }
}

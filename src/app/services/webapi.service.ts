import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  API = 'http://localhost:8000'
  GENERATOR = 'generator'
  PROJECTOR = 'projector'
  GALLERY  = 'gallery'

  constructor(private http: HttpClient) { }

  requestString(api:string, action:string){
    return `${this.API}/${api}/${action}`
  }

  generateRandom(): Observable<string> {
    return this.http.get(this.requestString(this.GENERATOR, "image")) as Observable<string>;
  }
  generate(data): Observable<string> {
    return this.http.post(this.requestString(this.GENERATOR, "imageByVector"), data) as Observable<string>;
  }
  project(data): Observable<string[]> {
    const formData = new FormData();
    formData.append("file", data, data.name);
    return this.http.post(this.requestString(this.PROJECTOR, "image"), formData) as Observable<string[]>;
  }
  projectmix(data): Observable<any> {
    return this.http.post(this.requestString(this.PROJECTOR, "mixProjection"), data) as Observable<any>;
  }
  mix(data): Observable<any> {
    return this.http.post(this.requestString(this.PROJECTOR, "mixSeeds"), data) as Observable<any>;
  }

  gallery(data): Observable<any> {
    return this.http.post(this.requestString(this.GALLERY, "images"), data) as Observable<any>;
  }
}

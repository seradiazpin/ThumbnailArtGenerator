import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  API = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  generateRandom(): Observable<string> {
    return this.http.get(this.API + "/generate/") as Observable<string>;
  }
  generate(data): Observable<string> {
    return this.http.post(this.API + "/generate/", data) as Observable<string>;
  }
  project(data): Observable<string[]> {
    const formData = new FormData();
    formData.append("file", data, data.name);
    return this.http.post(this.API + "/projectImage/", formData) as Observable<string[]>;
  }
  projectmix(data): Observable<string[]> {
    const formData = new FormData();
    formData.append("file", data, data.name);
    return this.http.post(this.API + "/projectMix/", formData) as Observable<string[]>;
  }
  mix(data): Observable<any> {
    return this.http.post(this.API + "/mix/", data) as Observable<any>;
  }
}

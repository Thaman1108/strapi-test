import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) {
    
  }
  getCall(url: string) {
    return this.http.get<any>(this.baseUrl + url, this.httpOptions).pipe(
      tap(
        (data) => {
          console.log(data)
        },
        (error) => {
          console.log(error)
        }
      )
    );
  }

  postCall(body: any, url: string) {
    return this.http.post<any>(this.baseUrl + url, body, this.httpOptions).pipe(
      tap(
        (data) => {
          console.log(data)
        },
        (error) => {
          console.log(error)
        }
      )
    );
  }
}

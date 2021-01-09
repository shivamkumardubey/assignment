import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url='https://api.themoviedb.org/3/movie/top_rated'
  private url1='https://api.themoviedb.org/3/movie/upcoming';
  private key= '84030530055f23d3ae6b98d7dd2979e9'
  language='en-US'
  constructor(private _http: HttpClient) { }
  getTopRated(): Observable<any>{
    const url = `${this.url}?api_key=${this.key}&language${this.language}&page=1`;
    // console.log(url);
    return this._http.get(url);

  }
  upcomming(): Observable<any>{
    const url = `${this.url1}?api_key=${this.key}&language${this.language}&page=1`;
    // console.log(url);
    return this._http.get(url);

  }
}

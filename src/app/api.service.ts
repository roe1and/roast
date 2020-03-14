import { Injectable } from '@angular/core';
import { Roast } from '../shared/roast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  roastsUrl = environment.roastsUrl;
  roastUrl = environment.roastUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getRoasts(): Observable<Roast[]> {
    return this.http.get<Roast[]>(this.roastsUrl)
  }

  getRoast(rid): Observable<Roast> {
    const roastToGet = this.roastUrl + '/' + rid;
    return this.http.get<Roast>(roastToGet)
  }

}

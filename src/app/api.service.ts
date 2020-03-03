import { Injectable } from '@angular/core';
import { Roast } from '../shared/roast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  getRoasts (): Observable<Roast[]> {
    return this.http.get<Roast[]>(this.apiUrl)
  }
}

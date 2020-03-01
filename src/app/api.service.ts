import { Injectable } from '@angular/core';
import { Roast } from '../shared/roast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  roastUrl = '../assets/recipes.json';
  constructor(
    private http: HttpClient,
  ) { }

  getRoasts (): Observable<Roast[]> {
    return this.http.get<Roast[]>(this.roastUrl)
  }
}

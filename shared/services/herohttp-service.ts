import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero-model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeroHttpService {

  private endpoint = 'https://heroes-webapi.azurewebsites.net/heroes';

  constructor(private http: HttpClient) {}

  post(hero: Hero) {
    return this.http.post<any>(this.endpoint,hero);
  }

  get(){
    return this.http.get<any>(this.endpoint);
  }

  delete(){
    return this.http.delete(this.endpoint);
  }

  update(hero: Hero) {
    return this.http.put<any>(this.endpoint, hero);
  }
}

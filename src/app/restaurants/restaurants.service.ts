import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './restaurants';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Restaurants[]>('http://localhost:8080/restaurant');
  }

  getById(id: number) {
    return this.http.get<Restaurants>(`http://localhost:8080/restaurant/${id}`);
   }

  create(r: Restaurants) {
    return this.http.post<Restaurants>('http://localhost:8080/restaurant', r);
  }

  update(r: Restaurants) {
    return this.http.put<Restaurants>('http://localhost:8080/restaurant', r);
  }


}

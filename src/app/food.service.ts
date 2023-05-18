import { Food } from './shop/shop.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url: string = 'https://ngrx-app-4fa48-default-rtdb.europe-west1.firebasedatabase.app/panier.json';

  constructor(private _httpClient: HttpClient) { }

  getApiFood(): Observable<Food[]> {
    return this._httpClient.get<Food[]>(this.url);
  }

  postApiFood(newFood: Food): Observable<any> {
    return this._httpClient.post(this.url, newFood);
  }

}

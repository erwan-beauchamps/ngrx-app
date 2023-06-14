import { Food } from '../shop/shop.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketList: Food[] = [];

  constructor() { }

  getBasketList(): Food[] {
    return this.basketList;
  }

  addToBasket(newFood: Food): void {
    this.basketList.push(newFood);
  }

}

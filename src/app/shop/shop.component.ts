import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BasketActions from '../basket/store/basket.actions';

export interface Food {
  name: string;
  price: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private store: Store<{ basket: {basketList: Food[]} }>) {}

  ngOnInit(): void {
    this.foodService.getApiFood().subscribe((result: Food[]) => {
      this.foods = result;
    });
  }

  addToBasket(newFood: Food): void {
    this.store.dispatch(new BasketActions.AddFood(newFood));
  }


}

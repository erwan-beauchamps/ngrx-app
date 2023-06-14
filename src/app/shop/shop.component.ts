import { BasketService } from '../services/basket.service';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private foodService: FoodService, private basket: BasketService) {}

  ngOnInit(): void {
    this.foodService.getApiFood().subscribe((result: Food[]) => {
      this.foods = result;
    });
  }

  addToBasket(newFood: Food): void {
    this.basket.addToBasket(newFood);
  }


}

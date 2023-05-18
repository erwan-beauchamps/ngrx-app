import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Food } from '../shop/shop.component';

export interface FoodCount {
  name: string;
  count: number;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketList: FoodCount[] = []
  total: number = 0;

  constructor(private basket: BasketService) {}

  ngOnInit(): void {
    this.basket.getBasketList().forEach(food => {
      this.total += food.price;
      let foodToFind = this.basketList.find(item => item.name === food.name);
      if (foodToFind) {
        foodToFind.count++;
      } else {
        this.basketList.push({name: food.name, count: 1});
      }
    })
  }

}

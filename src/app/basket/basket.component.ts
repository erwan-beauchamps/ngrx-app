import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Food } from '../shop/shop.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketList: Food[] = []
  total: number = 0;

  constructor(private basket: BasketService) {}

  ngOnInit(): void {
    this.basketList = this.basket.getBasketList();
  }

}

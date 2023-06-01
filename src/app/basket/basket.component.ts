import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketService } from '../basket.service';
import { Food } from '../shop/shop.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketList!: Observable<{basketList: Food[]}>;

  constructor(private store: Store<{ basket: {basketList: Food[]} }>) {}

  ngOnInit(): void {
    this.basketList = this.store.select('basket');
  }

}

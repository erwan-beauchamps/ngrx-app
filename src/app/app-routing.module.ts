import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent
  },{
    path: 'shop',
    component: ShopComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

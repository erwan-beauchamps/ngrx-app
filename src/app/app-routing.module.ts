import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [authGuard]
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canDeactivate: [canDeactivateGuard]
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

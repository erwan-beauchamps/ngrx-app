import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './basket/store/basket.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({basket: basketReducer}),
    StoreDevtoolsModule.instrument({logOnly: false}), // Environment
    MatGridListModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

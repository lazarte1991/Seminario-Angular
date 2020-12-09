import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { LazarteAboutComponent } from './lazarte-about/lazarte-about.component';
import { LazarteProductsComponent } from './lazarte-products/lazarte-products.component'

import { AppRoutingModule } from './app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    LazarteAboutComponent,
    LazarteProductsComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

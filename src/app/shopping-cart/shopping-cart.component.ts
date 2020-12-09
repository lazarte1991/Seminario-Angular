import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) { 
    this.cartList$ = cart.cartList.asObservable(); 
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1)=>v1.producto == product.producto && v1.color == product.color);
    if ((!item)&&(product.cantidad>0)){
      this._cartList.push({...product});
     
    }else{
      item.cantidad += product.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
    
    
  }

  
}

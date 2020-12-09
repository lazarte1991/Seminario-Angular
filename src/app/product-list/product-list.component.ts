import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductDataService) { 
 
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
      .subscribe(products => this.products = products);
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.cantidad;
    product.cantidad = 0;
  }




}

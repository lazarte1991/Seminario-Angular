import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart = {
    "imagen" : "assets/img/pantalon_gris.jpeg",
    "producto" : "Pantalon",
    "color" : "Gris",
    "talle" : "M",
    "cantidad" : 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}

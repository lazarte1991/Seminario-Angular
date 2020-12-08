import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] =[
    {
      "imagen" : "assets/img/pantalon_gris.jpeg",
      "producto" : "Pantalon",
      "color" : "Gris",
      "talle" : "M",
      "stock" : 5,
      "precio" : 1550,
      "oferta" : true,
    },
    {
      "imagen" : "assets/img/pantalon_gris.jpeg",
      "producto" : "Remera",
      "color" : "Azul",
      "talle" : "S",
      "stock" : 4,
      "precio" : 800,
      "oferta" : true,
    },
    {
      "imagen" : "assets/img/pantalon_gris.jpeg",
      "producto" : "Camisa",
      "color" : "Rojo",
      "talle" : "M",
      "stock" : 9,
      "precio" : 2100,
      "oferta" : false,
    },
    {
      "imagen" : "assets/img/pantalon_gris.jpeg",
      "producto" : "Buzo",
      "color" : "Amarillo",
      "talle" : "L",
      "stock" : 0,
      "precio" : 1550,
      "oferta" : false,
    },
    {
      "imagen" : "assets/img/pantalon_gris.jpeg",
      "producto" : "Remera",
      "color" : "Blanco",
      "talle" : "M",
      "stock" : 7,
      "precio" : 980,
      "oferta" : true,
    },
    

  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}

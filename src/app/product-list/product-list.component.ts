import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product = {
    "imagen" : "assets/img/pantalon_gris.jpeg",
    "producto" : "Pantalon",
    "color" : "Gris",
    "talle" : "M",
    "stock" : 5
  }

  constructor() { }

  ngOnInit(): void {
  }

}

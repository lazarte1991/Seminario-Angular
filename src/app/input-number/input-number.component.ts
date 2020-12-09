import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __importDefault } from 'tslib';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upCantidad(): void {
    if(this.cantidad < this.max) 
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }

  downCantidad(): void {
    if(this.cantidad > 0)
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }

  cambiarCantidad(event,): void {
    if(!(event.key>=0 && event.key<=9))
    event.prevent.default;
    this.cantidadChange.emit(this.cantidad);
  }

}

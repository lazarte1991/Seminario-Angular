import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/Product';
import { tap } from 'rxjs/operators';

const URL = '';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) => products.forEach(product => product.cantidad = 0) )
       );
  }
}

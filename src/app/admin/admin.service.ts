import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../feedback/message.service';

import { Product } from 'src/app/product-interface';
import { PRODUCTS } from 'src/app/products';
import { Order } from 'src/app/order-interface';
import { ORDERS } from 'src/app/orders';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private messageService: MessageService) {}

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Product Service: fetched products');
    return of(PRODUCTS);
  }

  getOrders(): Observable<Order[]>{
    this.messageService.add(`Order Service: fetched orders`);
    return of(ORDERS);
  }

  getProduct(id:number): Observable<Product> {
    this.messageService.add(`Product Service: fetched product ${id}`);
    return of(PRODUCTS.find(hero => hero.id === id));
  }
}

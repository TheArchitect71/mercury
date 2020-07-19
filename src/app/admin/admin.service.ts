import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../feedback/message.service';

import { Product } from 'src/app/product-interface';
import { PRODUCTS } from 'src/app/products';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private messageService: MessageService) {}

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('AdminService: fetched products');
    return of(PRODUCTS);
  }
}

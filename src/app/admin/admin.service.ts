import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../feedback/message.service';

import { Product } from 'src/app/product-interface';
import { Order } from 'src/app/order-interface';
import { ORDERS } from 'src/app/orders';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private productsUrl = 'api/products'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Product Service: fetched products');
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_) => this.log('fetched products dear')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getOrders(): Observable<Order[]> {
    this.messageService.add(`Order Service: fetched orders`);
    return of(ORDERS);
  }

  /** GET hero by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap((_) => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => this.log(`updated produc id=${product.id}`)),
      catchError(this.handleError<any>('updatedProduct'))
    );
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Admin Service: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

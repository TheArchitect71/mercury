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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
      tap((_) => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updatedProduct'))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.productsUrl, product, this.httpOptions)
      .pipe(
        tap((newProduct: Product) =>
          this.log(`added product w/ id=${newProduct.id}`)
        ),
        catchError(this.handleError<Product>('addProduct'))
      );
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .delete<Product>(url, this.httpOptions)
      .pipe(tap(_ => this.log(`deleted product id=${id}`)),
        catchError(this.handleError<Product>('deleteProduct'))
      )
  }

  /* GET products whose name contains search term */
searchProducts(term: string): Observable<Product[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found products matching "${term}"`) :
       this.log(`no products matching "${term}"`)),
    catchError(this.handleError<Product[]>('searchProducts', []))
  );
}

  /** Log a Admin Service message with the MessageService */
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

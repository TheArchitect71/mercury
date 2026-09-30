import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdminService } from '../admin/admin.service';
import { CartService } from '../cart.service';
import { Product } from '../product-interface';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  tiles = [
    { cols: 3, rows: 1, color: 'lightblue', image: 'assets/product.png'},
    { cols: 1, rows: 2, color: 'lightgreen', image: 'assets/product.png'},
    { cols: 1, rows: 1, color: 'lightpink', image: 'assets/product.png'},
    { cols: 2, rows: 1, color: '#DDBDF1', image: 'assets/product.png'},
  ];

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adminService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  goBack(): void {
    this.location.back();
  }
}

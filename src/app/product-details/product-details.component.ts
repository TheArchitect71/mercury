import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdminService } from 'src/app/admin/admin.service';
import { CartService } from '../cart.service';
import { Product } from '../product-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

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

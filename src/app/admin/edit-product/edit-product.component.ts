import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from 'src/app/product-interface';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location
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

  save(): void {
    this.adminService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

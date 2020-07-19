import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-interface'

import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: Product[];

  selectedProduct: Product;
  constructor(private adminService: AdminService) { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.adminService.getProducts().subscribe(products => {
      products = this.products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}

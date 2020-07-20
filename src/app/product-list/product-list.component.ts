import { Component } from '@angular/core';

import { Product } from '../product-interface';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];

  constructor (private adminService: AdminService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.adminService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
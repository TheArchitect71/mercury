import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-interface';

import { AdminService } from 'src/app/admin/admin.service';
import { MessageService } from 'src/app/feedback/message.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  products: Product[];

  selectedProduct: Product;
  constructor(
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.adminService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

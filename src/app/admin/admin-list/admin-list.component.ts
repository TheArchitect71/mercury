import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Product } from '../../product-interface';

import { AdminService } from '../admin.service';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  products: Product[];
  panelOpenState = false; 
  selectedProduct: Product;

  constructor(
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.adminService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return}
    this.adminService.addProduct({name} as Product).subscribe(product => {
      this.products.push(product);
    });
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.adminService.deleteProduct(product).subscribe();
  }
}

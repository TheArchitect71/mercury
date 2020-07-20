import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order-interface';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(private AdminService: AdminService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.AdminService.getOrders().subscribe(document => {
      this.orders = document;
    })
  }

}

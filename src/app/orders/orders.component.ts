import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Order } from '../order-interface';
import { AdminService } from '../admin/admin.service';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
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

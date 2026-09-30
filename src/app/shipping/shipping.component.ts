import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CartService } from '../cart.service';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CartService } from '../cart.service';

@Component({
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

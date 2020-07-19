import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product-interface'


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }
  
  
  ngOnInit(): void {
  }

}

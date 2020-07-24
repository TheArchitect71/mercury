import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from 'src/app/product-interface';
import { AdminService } from '../admin.service';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  hide = true;
  editMode: false;
  
  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   price: new FormControl('')
  // });

  productForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: []
  });

  product: Product;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm.value);
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

  updateProduct() {
    this.productForm.patchValue({
      name: 'Miguel',
      description: 'Sanchez',
      price: 15
    })
  }
}


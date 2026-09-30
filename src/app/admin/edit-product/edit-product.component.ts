import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../../product-interface';
import { AdminService } from '../admin.service';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  hide = true;
  private editMode: boolean;
  private id: string;

  tiles = [
    {
      cols: 1,
      rows: 1,
      color: 'lightblue',
      image: 'assets/product.png',
    },
    {
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      image: 'assets/product.png',
    },
    {
      cols: 1,
      rows: 1,
      color: 'lightpink',
      image: 'assets/product.png',
    },
    {
      cols: 1,
      rows: 1,
      color: '#DDBDF1',
      image: 'assets/product.png',
    },
  ];

  productForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [],
  });

  product: Product;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm.value);
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.product = {name:'', description:'', price:0} as Product; return; }
    this.adminService.getProduct(id).subscribe(product=>{this.product=product; if(product)this.productForm.patchValue(product);});
  }
  save(): void {
    const value = {...this.product,...this.productForm.value};
    const action = this.product.id ? this.adminService.updateProduct(value) : this.adminService.addProduct(value);
    action.subscribe(()=>this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  updateProduct() {
    this.productForm.patchValue({
      name: 'Miguel',
      description: 'Sanchez',
      price: 15,
    });
  }
}

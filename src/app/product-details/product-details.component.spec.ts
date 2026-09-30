import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ProductDetailsComponent } from './product-details.component';
it('creates ProductDetailsComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ProductDetailsComponent);expect(f.componentInstance).toBeTruthy();});

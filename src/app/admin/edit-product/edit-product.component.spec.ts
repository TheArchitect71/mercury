import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { EditProductComponent } from './edit-product.component';
it('creates EditProductComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(EditProductComponent);expect(f.componentInstance).toBeTruthy();});

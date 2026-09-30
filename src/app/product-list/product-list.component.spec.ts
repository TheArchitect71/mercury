import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ProductListComponent } from './product-list.component';
it('creates ProductListComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ProductListComponent);expect(f.componentInstance).toBeTruthy();});

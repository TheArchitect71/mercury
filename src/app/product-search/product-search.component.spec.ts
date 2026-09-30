import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ProductSearchComponent } from './product-search.component';
it('creates ProductSearchComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ProductSearchComponent);expect(f.componentInstance).toBeTruthy();});

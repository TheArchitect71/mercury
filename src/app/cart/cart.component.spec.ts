import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { CartComponent } from './cart.component';
it('creates CartComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(CartComponent);expect(f.componentInstance).toBeTruthy();});

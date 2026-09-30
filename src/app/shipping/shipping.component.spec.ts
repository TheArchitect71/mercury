import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ShippingComponent } from './shipping.component';
it('creates ShippingComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ShippingComponent);expect(f.componentInstance).toBeTruthy();});

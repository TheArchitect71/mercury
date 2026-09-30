import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { OrdersComponent } from './orders.component';
it('creates OrdersComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(OrdersComponent);expect(f.componentInstance).toBeTruthy();});

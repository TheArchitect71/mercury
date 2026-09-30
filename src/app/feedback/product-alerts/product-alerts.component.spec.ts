import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { ProductAlertsComponent } from './product-alerts.component';
it('creates ProductAlertsComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ProductAlertsComponent);expect(f.componentInstance).toBeTruthy();});

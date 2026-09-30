import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { AdminListComponent } from './admin-list.component';
it('creates AdminListComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(AdminListComponent);expect(f.componentInstance).toBeTruthy();});

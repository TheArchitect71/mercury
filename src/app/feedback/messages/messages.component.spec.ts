import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { MessagesComponent } from './messages.component';
it('creates MessagesComponent with current module dependencies',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(MessagesComponent);expect(f.componentInstance).toBeTruthy();});

import { AppModule } from '../app.module';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AppModule] });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

it('keeps in-memory product CRUD and search working', async () => {
  TestBed.configureTestingModule({imports:[AppModule]});
  const service=TestBed.inject(AdminService);
  const {firstValueFrom}=await import('rxjs');
  const original=await firstValueFrom(service.getProducts());
  expect(original.length).toBe(9);
  const created=await firstValueFrom(service.addProduct({name:'Migration Item',description:'Local',price:9} as import('../product-interface').Product));
  expect(created.id).toBeGreaterThan(19);
  await firstValueFrom(service.updateProduct({...created,name:'Updated Item'}));
  expect((await firstValueFrom(service.getProduct(created.id))).name).toBe('Updated Item');
  expect((await firstValueFrom(service.searchProducts('Updated Item'))).length).toBe(1);
  await firstValueFrom(service.deleteProduct(created));
  expect((await firstValueFrom(service.getProducts())).length).toBe(9);
});

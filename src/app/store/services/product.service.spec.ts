import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { Product } from 'src/models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProductList return list count 6 objects', () => {
    let list: Product[];
    service.getProductList().subscribe((data) => {
      list = data;
      expect(list?.length).toBe(6);
    });
  });

});

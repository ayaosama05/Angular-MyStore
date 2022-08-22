import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }
  ProductsList:Product[] = [];

  ngOnInit(): void {
    this.productService.getProductList().subscribe(res => {
      this.ProductsList = res;
    })
  }

}

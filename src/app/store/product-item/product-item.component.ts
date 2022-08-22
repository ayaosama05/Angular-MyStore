import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private productService:ProductService,private cartService:CartService) { }

  @Input() product:Product= new Product();

  listOptions:any[] = [];
  selectedOption: number=1;

  ngOnInit(): void {
    this.listOptions = this.productService.getAllowedQuantities();
  }

  addToCart(product:Product,count:number){
  //  alert(`${count} of ${product.name} has been added to you cart`);
    //this.cartService.CheckItemExistedInCart(product);
    //this.cartService.AddToCart(product,count);
    const num = this.cartService.CheckItemExistedInCart(product);
    if (num != -1) {
      this.cartService.UpdateCart(product, count, num);
    } else {
      this.cartService.AddToCart(product, count);
    }
    alert('Added to cart successfully!');
    console.log(this.cartService.GetCartList());
  }
}

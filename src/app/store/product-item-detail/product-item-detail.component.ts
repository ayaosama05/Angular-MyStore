import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productId: number = 0;
  product: Product | undefined;
  listOptions: any[] = [];
  selectedOption: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService
      .getProductList()
      .subscribe(
        (res) => (this.product = res.filter((a) => a.id == this.productId)[0])
      );
    this.listOptions = this.productService.getAllowedQuantities();
  }

  addToCart(product: Product | any, count: number) {
    //  alert(`${count} of ${product.name} has been added to you cart`);
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

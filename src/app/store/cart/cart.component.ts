import { Component, OnInit } from '@angular/core';
import { cart } from 'src/models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: cart[] = [];
  
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
   this.cartList = this.cartService.GetCartList();
   this.totalPrice = this.cartService.GetTotalPrice();
   // this.totalPrice = this.cartService.GetTotalCartProice(this.cartList); // Just for test
  }

  modelChanged(obj: any) {
    console.log(obj);
  }

  UpdateCartItem(cart:cart):void{
  //  console.log("Inside Cart");
    let index = this.cartList.findIndex(elm => elm.Product == cart.Product);
    this.cartList[index] = cart;
    this.totalPrice = this.cartService.GetTotalCartProice(this.cartList);
 //   this.posts = this.posts.filter(a => a.id !== post.id);
  }
}

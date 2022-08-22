import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { cart } from 'src/models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cart:cart= new cart();
  @Output() UpdateCart = new EventEmitter<cart>();
  @Output() ReomveItemCart = new EventEmitter<cart>();

  constructor() { }

  ngOnInit(): void {
  }

  QuantityChanged(obj:number){
    console.log(obj);
    this.cart = {
      ItemQuantity : obj,
      Product : this.cart.Product
    };
    this.UpdateCart.emit(this.cart);
   // console.log("Event fired !");
  }

  RemoveItemFromCart(obj:cart){
    this.ReomveItemCart.emit(obj);
    alert("Item has been removed from cart successfully !");
  }
}

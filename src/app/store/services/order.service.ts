import { Injectable } from '@angular/core';
import { paymentForm } from 'src/models/confirmation.form';
import { order } from 'src/models/order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order:order = new order();

  constructor(private cartService:CartService) { }

  MakeOrder(CustomerInfo:paymentForm) : void{
    this.order = {
      CustomerInfo:CustomerInfo,
      OrderInfo:this.cartService.cartList,
      TotalPrice : this.cartService.GetTotalPrice()
    }
  }

  GetOrder() : order{
    return this.order;
  }
}

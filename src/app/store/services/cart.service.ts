import { Injectable } from '@angular/core';
import { cart } from 'src/models/cart';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList:cart[] = [];

  AddToCart(product:Product,quantity:number){
    let Newcart:cart={
      Product:product,
      ItemQuantity:quantity
    };
    this.cartList.push(Newcart);
    this.SaveCart(this.cartList);
    return Newcart;
  }

  CheckItemExistedInCart(product:Product){
    let currentItem = this.cartList.filter(a => a.Product.id == product.id);
    if(currentItem.length > 0){
     // console.log("Already exist");
      const index =  this.cartList.indexOf(currentItem[0]);
      return index;
    }
    return -1;
  }

  UpdateCart(product:Product,newQuantity:number,index:number){
    this.cartList.splice(index,1);
    let Newcart:cart={
      Product:product,
      ItemQuantity:newQuantity
    };
    this.cartList.splice(index, 0, Newcart);
    this.SaveCart(this.cartList);
    return Newcart;
  }

  GetCartList(){
    const cart = localStorage.getItem('cart');

    if(cart){
        this.cartList = JSON.parse(cart);
    }
    return this.cartList;
  }

  GetTotalPrice():number{
    let totalPrice:number = 0;
    this.cartList.forEach(element => {
      totalPrice += (element.ItemQuantity * element.Product.price)
    });
    return totalPrice;
  }

  GetTotalCartProice(cart:cart[]){
    let totalPrice:number = 0;
    cart.forEach(ele => {
      totalPrice += (ele.ItemQuantity * ele.Product.price)
    });
    return totalPrice;
  }

  SaveCart(cart:cart[]){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}

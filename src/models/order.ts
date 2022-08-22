import { cart } from "./cart";
import { paymentForm } from "./confirmation.form";

export class order{
    CustomerInfo:paymentForm = new paymentForm();
    OrderInfo:cart[] = [];
    TotalPrice:number=0;
}
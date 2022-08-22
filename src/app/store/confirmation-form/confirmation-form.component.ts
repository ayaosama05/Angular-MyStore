import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paymentForm } from 'src/models/confirmation.form';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent implements OnInit {

  constructor(private route:Router,private orderService:OrderService) { }

  PForm:paymentForm = new paymentForm();

  ngOnInit(): void {
  }

  SubmitForm(){
    this.orderService.MakeOrder(this.PForm);
    this.route.navigate(['success']);
  }
}

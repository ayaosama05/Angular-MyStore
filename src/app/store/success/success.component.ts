import { Component, OnInit } from '@angular/core';
import { order } from 'src/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  order:order = new order();

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.order = this.orderService.GetOrder();
  }

}

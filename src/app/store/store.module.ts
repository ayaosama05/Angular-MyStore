import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { FormsModule } from '@angular/forms';
/* import Http client module to allow using Http client -API- */
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    CartComponent,
    CartItemComponent,
    ConfirmationFormComponent
  ],
  imports: [
    CommonModule,FormsModule,HttpClientModule,AppRoutingModule
  ]
})
export class StoreModule { }

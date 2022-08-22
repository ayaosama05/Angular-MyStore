import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './store/product-item/product-item.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductItemDetailComponent } from './store/product-item-detail/product-item-detail.component';
import { CartComponent } from './store/cart/cart.component';
import { CartItemComponent } from './store/cart-item/cart-item.component';
import { ConfirmationFormComponent } from './store/confirmation-form/confirmation-form.component';
/* import Http client module to allow using Http client -API- */
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './store/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    CartComponent,
    ConfirmationFormComponent,
    NavMenuComponent,CartItemComponent, ErrorComponent, SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

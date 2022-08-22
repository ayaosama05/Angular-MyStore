import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductItemDetailComponent } from './store/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './store/cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './store/success/success.component';

const routes: Routes = [
  { path:'',component:ProductListComponent},
  { path: 'products/details/:id', component: ProductItemDetailComponent },
  { path: 'cart' , component:CartComponent },
  { path:'success',component:SuccessComponent},
  { path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

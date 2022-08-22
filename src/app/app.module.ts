import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './store/success/success.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { DetailPageComponent } from './products/detail-page/detail-page.component';
import { ListComponent } from './products/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    DetailPageComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() mochila: Product | undefined;
}

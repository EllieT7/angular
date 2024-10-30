import { Component } from '@angular/core';
import { Product } from '../product-card/product-card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  pageNumber: number = 1;

  nextPage(){
    this.pageNumber = this.pageNumber + 1;
  }

  prevPage(){
    if(this.pageNumber > 1){
      this.pageNumber = this.pageNumber - 1;
    }
  }

  listaProductos: Product [] = [{
    id: 1,
    imageUrl: '../assets/images/images.jpeg',
    name: 'Mochila rosa',
    description: 'Esta es una mochila rosa, muy bonita y cómoda',
    price: 100.50,
  },
  {
    id: 2,
    imageUrl: '../assets/images/images.jpeg',
    name: 'Mochila azul',
    description: 'Esta es una mochila azul, muy bonita y cómoda',
    price: 100.50,
  },
  {
    id: 3,
    imageUrl: '../assets/images/images.jpeg',
    name: 'Mochila negra',
    description: 'Esta es una mochila negra, muy bonita y cómoda',
    price: 34.50,
  },
  {
    id: 4,
    imageUrl: '../assets/images/images.jpeg',
    name: 'Mochila extra',
    description: 'Esta es una mochila negra, muy bonita y cómoda',
    price: 100.50,
  },
  {
    id:5,
    imageUrl: '../assets/images/images.jpeg',
    name: 'Mochila nueva',
    description: 'Esta es una mochila negra, muy bonita y cómoda',
    price: 100.50,
  }

]
}

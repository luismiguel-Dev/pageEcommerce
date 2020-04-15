import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 3030303,
      description: 'blablblblblblb'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 3423423,
      description: 'blablblblblblb'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 1121,
      description: 'blablblblblblb'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 11,
      description: 'blablblblblblb'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stikers1',
      price: 11,
      description: 'blablblblblblb'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.jpg',
      title: 'Stickers12',
      price: 11,
      description: 'blablblblblblb'
    }
  ];
  constructor() { }

  getAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}

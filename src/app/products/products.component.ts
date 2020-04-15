import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
      image: 'assets/images/hoodie.jpg',
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

  ngOnInit() {
  }

  clickProduct(id: number) {

    console.log('product');
    console.log(id);
  }

}

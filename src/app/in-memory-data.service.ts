import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product-interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 11,
        name: 'Acapulco Gold',
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        price: 45,
      },
      {
        id: 12,
        name: 'Ace of Spades',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        price: 40,
      },
      {
        id: 13,
        name: 'Alien Cookies',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        price: 36,
      },
      {
        id: 14,
        name: 'Apollo 13',
        description:
          'Curabitur ac nulla risus.',
        price: 29,
      },
      {
        id: 15,
        name: 'Blue Diesel',
        description:
          'Curabitur ac nulla risus.',
        price: 38,
      },
      {
        id: 16,
        name: 'Cornbread',
        description:
          'Curabitur ac nulla risus.',
        price: 15,
      },
      {
        id: 17,
        name: 'Grand Hindu',
        description:
          'Curabitur ac nulla risus.',
        price: 21,
      },
      {
        id: 18,
        name: 'La Mamalona',
        description:
          'Curabitur ac nulla risus.',
        price: 37,
      },
      {
        id: 19,
        name: `Skywalker`,
        description:
          'Curabitur ac nulla risus.',
        price: 20,
      }
    ];
    return { products };
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 11;
  }
}

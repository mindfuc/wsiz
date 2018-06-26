import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 11,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 12,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 13,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 14,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 15,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 16,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    }, {
      id: 17,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 18,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
    {
      id: 19,
      category: 'notebooks',
      description: 'Lorem sunt elit nulla anim duis duis in dolor. Sint dolor fugiat magna ea minim ex officia. Eu aliqua in adipisicing aute do.',
      title: 'Mr. Nice',
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=24&w=350&h=150&txt=Example'
    },
  ];

  constructor() {
  }

  ngOnInit() {

  }
}

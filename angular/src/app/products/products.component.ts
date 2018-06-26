import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.products = db.list('products').valueChanges();
  }

  ngOnInit() {
  }
}

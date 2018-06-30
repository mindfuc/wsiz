import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Observable<any[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private _location: Location
  ) {
    this.route.params.subscribe(params => {
      this.product = db.list('/products', ref => ref.orderByChild('id')
        .equalTo(params['id']))
        .valueChanges()
    });
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}

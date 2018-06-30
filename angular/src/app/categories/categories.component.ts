import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase} from "angularfire2/database";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: Observable<any[]>;
  id: string;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.products = db.list('/products', ref => ref.orderByChild('category')
        .equalTo(params['id']))
        .valueChanges()
    });
  }

  ngOnInit() {
  }
}

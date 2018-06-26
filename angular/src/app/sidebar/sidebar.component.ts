import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  categories: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.categories = db.list('categories').valueChanges();
  }

  ngOnInit() {
  }
}

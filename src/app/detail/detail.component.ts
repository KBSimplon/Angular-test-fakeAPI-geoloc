import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Observable } from 'rxjs';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  shop$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.shop$ = params.id);
   }

  ngOnInit() {
    this.data.getDetail(this.shop$).subscribe(
      data => this.shop$ = data
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  shops: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.shops = this.dataService.shops;
  }

}

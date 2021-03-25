import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  noItem: boolean;

  watchlist: string[] = [];

  localItems;

  openPage(link) {
    window.location.href = link;
  }

  constructor() {}

  ngOnInit(): void {
    this.localItems = JSON.parse(localStorage.getItem('items')) || [];
    this.noItem = this.localItems.length === 0;
  }
}

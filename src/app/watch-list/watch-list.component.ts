import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  noItem: boolean = false;

  watchlist: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.watchlist.push('https://picsum.photos/id/666/900/500');
    this.watchlist.push('https://picsum.photos/id/111/900/500');
    this.watchlist.push('https://picsum.photos/id/22/900/500');
    this.watchlist.push('https://picsum.photos/id/31/900/500');
    this.watchlist.push('https://picsum.photos/id/43/900/500');
    this.watchlist.push('https://picsum.photos/id/4/900/500');
    this.watchlist.push('https://picsum.photos/id/46/900/500');
  }
}

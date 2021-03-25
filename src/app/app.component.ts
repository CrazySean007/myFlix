import { Component, ViewEncapsulation } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Observable, of, OperatorFunction } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomepageService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myFlix';

  public model: any;

  autoComplete = [];
  searching;
  searchFailed;

  isSmallScreen = window.innerWidth <= 600;

  homepage;

  mylist;

  constructor(private homepageService: HomepageService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.homepageService.searchKeyword(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );

  format = (x: { name: string }) => x.name;

  openPage(media_type, id) {
    window.location.href = `/watch/${media_type}/${id}`;
  }

  async ngOnInit() {
    this.homepage = window.location.href.includes('home');
    this.mylist = window.location.href.includes('mylist');
  }
}

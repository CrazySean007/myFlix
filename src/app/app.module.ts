import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponentComponent,
    MovieDetailComponent,
    WatchListComponent,
    TvDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

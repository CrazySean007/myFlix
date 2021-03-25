import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'watch/movie/:id', component: MovieDetailComponent },
  { path: 'watch/tv/:id', component: TvDetailComponent },
  { path: 'mylist', component: WatchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

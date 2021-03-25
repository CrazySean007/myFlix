import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomepageComponent implements OnInit {
  localItems: any;
  constructor(
    private config: NgbCarouselConfig,
    private homepageService: HomepageService
  ) {
    config.showNavigationArrows = true;
    config.interval = 500000;
    config.pauseOnHover = true;
  }

  images: string[] = [];

  imgs: string[] = [];

  isSmallScreen = window.innerWidth <= 768;

  trends_movie = [];

  top_movie = [];

  cur_movie = [];

  pop_movie = [];

  pop_tv = [];

  trends_tv = [];

  top_tv = [];

  resizeTimeout;

  async ngOnInit() {
    this.localItems = JSON.parse(localStorage.getItem('items')) || [];
    this.isSmallScreen = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(
        () => (this.isSmallScreen = window.innerWidth <= 768),
        300
      );
    });
    await this.getMovieTrends();
    await this.getMovieTopRate();
    await this.getMovieCurrent();
    await this.getMoviePopular();
    await this.getTVPopular();
    await this.getTVTopRate();
    await this.getTVTrends();
  }

  async getMovieTrends() {
    const data = await this.homepageService.searchTrendMovie();
    this.trends_movie = data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
      };
    });
  }

  async getMovieTopRate() {
    const data = await this.homepageService.searchTopMovie();
    this.top_movie = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getMovieCurrent() {
    const data = await this.homepageService.searchCurrentMovie();
    this.cur_movie = data.results
      .filter((item) => item.backdrop_path && (item.name || item.title))
      .slice(0, 5)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
        };
      });
  }

  async getMoviePopular() {
    const data = await this.homepageService.searchPopularMovie();
    this.pop_movie = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getTVTrends() {
    const data = await this.homepageService.searchTrendTV();
    this.trends_tv = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.name,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getTVTopRate() {
    const data = await this.homepageService.searchTopTV();
    this.top_tv = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.name,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getTVPopular() {
    const data = await this.homepageService.searchPopularTV();
    this.pop_tv = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.name,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  openPage(link) {
    window.location.href = link;
  }
}

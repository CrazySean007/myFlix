import { Component, OnInit } from '@angular/core';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookSquare,
  faImdb,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  faStar = faStar;

  faTimes = faTimes;

  faImdb = faImdb;

  faInstagram = faInstagram;

  faFacebook = faFacebookSquare;

  faTwitter = faTwitter;

  movie_id: number;

  video_id: string = 'tzkWB85ULJY';

  reviewNum: number;

  movie_detail;

  movie_video: any;
  movie_cast: any;
  cast_info: any;
  cast_links: any;
  movie_recommend: any;
  recommend_movie: any;
  similar_movie: any;
  isSmallScreen: boolean;
  resizeTimeout: any;
  movie_reviews: any;

  localItems = [
    {
      id: 464052,
      name: '123',
    },
    {
      id: 123,
      name: '345',
    },
  ];
  localIncluded: boolean;
  showTag: boolean = false;
  showAdded: boolean;
  showRemoved: boolean;

  constructor(
    private modalService: NgbModal,
    private homepageService: HomepageService
  ) {}

  getTimeString(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let str1 = hours === 0 ? '' : hours + 'h';
    let str2 = mins === 0 ? '' : mins + 'mins';
    return str1 + str2;
  }

  async open(content, cast_id) {
    this.cast_info = await this.homepageService.getCastDetail(cast_id);
    this.cast_info = [this.cast_info].map((item) => {
      return {
        birthday: item.birthday,
        gender:
          item.gender === 0 ? undefined : item.gender === 1 ? 'female' : 'male',
        name: item.name,
        also_known_as: item.also_known_as.toString(),
        known_for_department: item.known_for_department,
        biography: item.biography,
        homepage: item.homepage,
        place_of_birth: item.place_of_birth,
      };
    })[0];
    this.cast_links = await this.homepageService.getCastLink(cast_id);
    this.modalService.open(content, {
      size: 'xl',
      windowClass: 'modal-custom-class',
      centered: true,
    });
  }

  getLinkFormat(link) {
    if (link === null)
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
    if (link.indexOf('/http') === 0 || link.indexOf('/www') === 0)
      return link.substring(1);
    if (link.indexOf('/') === 0)
      return 'https://image.tmdb.org/t/p/original' + link;
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
  }

  addLocalItem() {
    const localItems = JSON.parse(localStorage.getItem('items')) || [];
    localItems.push(this.movie_detail);
    localStorage.setItem('items', JSON.stringify(localItems));
    this.localIncluded = true;
    this.showTag = true;
    this.showAdded = true;
    setTimeout(() => {
      this.showTag = false;
    }, 5000);
  }

  removeLocalItem() {
    const localItems = JSON.parse(localStorage.getItem('items')) || [];
    let ind = -1;
    localItems.find((item, index) => {
      if (item.id === this.movie_detail.id && item.media_type === 'movie')
        ind = index;
      return item.id === this.movie_detail.id && item.media_type === 'movie';
    });
    if (ind !== -1) {
      localItems.splice(ind, 1);
    }
    localStorage.setItem('items', JSON.stringify(localItems));
    this.localIncluded = false;
    this.showTag = true;
    this.showAdded = false;
    setTimeout(() => {
      this.showTag = false;
    }, 5000);
  }

  closeTab() {
    this.showTag = false;
  }

  async ngOnInit() {
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

    const link = window.location.href;
    this.movie_id = parseInt(link.substring(link.lastIndexOf('/') + 1));
    let localItems = JSON.parse(localStorage.getItem('items')) || [];
    this.localIncluded = localItems
      .map((item) => item.id)
      .includes(this.movie_id);
    this.movie_detail = await this.homepageService.searchDetailMovie(
      this.movie_id
    );
    this.movie_detail = [this.movie_detail].map((item) => {
      return {
        title: item.title,
        id: item.id,
        genres: item.genres.map((item) => item.name).toString(),
        spoken_languages: item.spoken_languages
          .map((item) => item.name)
          .toString(),
        release_date: new Date(item.release_date).getFullYear(),
        runtime: this.getTimeString(item.runtime),
        overview: item.overview,
        vote_average: item.vote_average,
        tagline: item.tagline,
        poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        media_type: 'movie',
      };
    })[0];
    this.movie_video = await this.homepageService.searchVideoMovie(
      this.movie_id
    );

    this.movie_video = this.movie_video.results[0]?.key || 'tzkWB85ULJY';

    this.movie_cast = await this.homepageService.searchCastMovie(this.movie_id);

    this.movie_cast = this.movie_cast['cast']
      .filter((item) => item.profile_path)
      .map((item) => {
        return {
          id: item.id,
          name: item.name,
          character: item.character,
          profile_path: 'https://image.tmdb.org/t/p/w500' + item.profile_path,
        };
      });

    await this.getMovieRecommend();
    await this.getMovieSimilar();
    await this.getMovieReview();
  }

  async getMovieRecommend() {
    const data = await this.homepageService.searchRecommendMovie(this.movie_id);
    this.recommend_movie = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getMovieSimilar() {
    const data = await this.homepageService.searchSimilarMovie(this.movie_id);
    this.similar_movie = data.results
      .filter((item) => item.poster_path)
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        };
      });
  }

  async getMovieReview() {
    const data = await this.homepageService.searchReviewMovie(this.movie_id);
    this.movie_reviews = data.results.map((item) => {
      return {
        author: item.author,
        content: item.content,
        created_at: item.created_at,
        url: item.url,
        rating: item.author_details.rating || 0,
        avatar_path: this.getLinkFormat(item.author_details.avatar_path),
      };
    });

    this.reviewNum = this.movie_reviews.length;
  }

  openPage(link) {
    window.location.href = link;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const PARAMS = new HttpParams({
  fromObject: {
    format: 'json',
    origin: '*',
  },
});

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'http://localhost:4000';

  // async searchKeyword(keyword) {
  //   const data = await fetch(`${this.BASE_URL}/search?query=${keyword}`);
  //   const result = await data.json();
  //   return result;
  // }

  searchKeyword(term) {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get(`${this.BASE_URL}/search`, { params: PARAMS.set('query', term) })
      .pipe(
        map((response) => {
          console.log(response);
          return response['results']
            .filter(
              (item) => item.media_type === 'movie' || item.media_type === 'tv'
            )
            .slice(0, 7)
            .map((item) => {
              return {
                id: item.id,
                name:
                  item.media_type === 'tv'
                    ? item.name
                    : item.title || item.origin_title,
                backdrop_path: item.backdrop_path || item.poster_path,
                media_type: item.media_type,
              };
            });
        })
      );
  }

  async searchTrendMovie() {
    const data = await fetch(`${this.BASE_URL}/movie/trend`);
    const result = await data.json();
    return result;
  }

  async searchTopMovie() {
    const data = await fetch(`${this.BASE_URL}/movie/top_rated`);
    const result = await data.json();
    return result;
  }

  async searchCurrentMovie() {
    const data = await fetch(`${this.BASE_URL}/movie/current`);
    const result = await data.json();
    return result;
  }

  async searchPopularMovie() {
    const data = await fetch(`${this.BASE_URL}/movie/popular`);
    const result = await data.json();
    return result;
  }

  async searchRecommendMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/recommendation?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchSimilarMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/similar?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchVideoMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/video?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchDetailMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/detail?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchReviewMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/review?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchCastMovie(movie_id) {
    const data = await fetch(
      `${this.BASE_URL}/movie/cast?movie_id=${movie_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchTrendTV() {
    const data = await fetch(`${this.BASE_URL}/tv/trend`);
    const result = await data.json();
    return result;
  }

  async searchTopTV() {
    const data = await fetch(`${this.BASE_URL}/tv/top_rated`);
    const result = await data.json();
    return result;
  }

  async searchPopularTV() {
    const data = await fetch(`${this.BASE_URL}/tv/popular`);
    const result = await data.json();
    return result;
  }

  async searchRecommendTV(tvshow_id) {
    const data = await fetch(
      `${this.BASE_URL}/tv/recommendation?tvshow_id=${tvshow_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchSimilarTV(tvshow_id) {
    const data = await fetch(
      `${this.BASE_URL}/tv/similar?tvshow_id=${tvshow_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchVideoTV(tvshow_id) {
    const data = await fetch(
      `${this.BASE_URL}/tv/video?tvshow_id=${tvshow_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchDetailTV(tvshow_id) {
    const data = await fetch(
      `${this.BASE_URL}/tv/detail?tvshow_id=${tvshow_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchReviewTV(tvshow_id) {
    const data = await fetch(
      `${this.BASE_URL}/tv/review?tvshow_id=${tvshow_id}`
    );
    const result = await data.json();
    return result;
  }

  async searchCastTV(tvshow_id) {
    const data = await fetch(`${this.BASE_URL}/tv/cast?tvshow_id=${tvshow_id}`);
    const result = await data.json();
    return result;
  }

  async getCastDetail(person_id) {
    const data = await fetch(
      `${this.BASE_URL}/person/search?person_id=${person_id}`
    );
    const result = await data.json();
    return result;
  }

  async getCastLink(person_id) {
    const data = await fetch(
      `${this.BASE_URL}/person/external_id?person_id=${person_id}`
    );
    const result = await data.json();
    return result;
  }
}

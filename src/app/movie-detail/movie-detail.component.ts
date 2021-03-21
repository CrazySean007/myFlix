import { Component, OnInit } from '@angular/core';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  faStar = faStar;

  faTimes = faTimes;

  faFacebook = faFacebookSquare;

  faTwitter = faTwitter;

  image: string = 'https://picsum.photos/id/188/900/500';

  castImages: string[];

  images: string[] = [];

  imgs: string[] = [];

  reviewNum: number = 10;

  reviews = [
    {
      img: '123',
      username: 'SWITCH',
      date: 'December 18, 2020, 6:08:08 AM',
      rate: 8,
      review:
        "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfa",
    },
    {
      img: '456',
      username: 'msbreviews',
      date: 'December 18, 2020, 6:08:08 AM',
      rate: 8,
      review:
        "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfa",
    },
    {
      img: '123',
      username: 'test1',
      date: 'December 18, 2020, 6:08:08 AM',
      rate: 7,
      review:
        "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfa",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.castImages = Array(10).fill(this.image);
    this.images = [1055, 194, 368].map(
      (n) => `https://picsum.photos/id/${n}/900/500`
    );

    this.imgs = this.images;
  }
}

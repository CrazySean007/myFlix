import { Component, OnInit } from '@angular/core';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  castDetail: any;

  image: string = 'https://picsum.photos/id/188/900/500';

  castImages: string[];

  images = [];

  casts = [];

  imgs = [];

  reviewNum: number = 10;

  reviews = [
    {
      img: '123',
      username: 'SWITCH',
      date: 'December 18, 2020, 6:08:08 AM',
      rate: 8,
      review:
        "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfaIt isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adoew, but is does come across as a bit of a mess, akhgakjdfkajsdhkjdhasjkhdkj adsjgaalsgfv,ajdgsdladsasd.afjgslfhalisfhkdfjgsgkdfa",
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

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {
      size: 'xl',
      windowClass: 'modal-custom-class',
      centered: true,
    });
  }

  ngOnInit(): void {
    this.castImages = Array(10).fill(this.image);
    this.images = [1055, 194, 368].map(
      (n) => `https://picsum.photos/id/${n}/900/500`
    );

    this.imgs = this.images;

    this.castDetail = {
      username: '234',
      image: 'https://picsum.photos/id/666/900/500',
      birthday: '1990-08-28',
      birthplace: 'Los Angeles, California, California, USA',
      gender: 'male',
      known: 'Acting',
      other:
        '789,  create mode 100644 src/app/homepage/homepage.component.cssafk askdhasd kashdkgkfa aksdhakjsdhkja kgkag kash   kasghd aksh kq',
      id: 'tweet',
      biography:
        "unctions to specifically add or remove the class Angular Reading your question, it seems like you're working with Angular therefore you can use the built-in class directive to toggle the class in the template itself. <!-- toggleEllipses is a boolean indicating ellipsis status -->",
    };
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
    this.casts.push(this.castDetail);
  }
}

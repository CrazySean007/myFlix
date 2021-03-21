import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomepageComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.interval = 5000;
    config.pauseOnHover = true;
  }

  images: string[] = [];

  imgs: string[] = [];

  isSmallScreen = window.innerWidth <= 600;

  ngOnInit(): void {
    this.images = [1055, 194, 368].map(
      (n) => `https://picsum.photos/id/${n}/900/500`
    );

    this.imgs = this.images;

    this.isSmallScreen = window.innerWidth <= 600;
    window.addEventListener('resize', () => {
      console.log('current width: ', window.innerWidth);
      this.isSmallScreen = window.innerWidth <= 600;
      console.log(this.isSmallScreen);
    });
  }
}

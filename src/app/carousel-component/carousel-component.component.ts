import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponentComponent implements OnInit {
  @Input() title?: string;

  @Input() imgs?: string[];

  imageGroups: any;

  isSmallScreen = window.innerWidth <= 768;

  imgList = [];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.interval = 500000;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.imageGroups = [];
    this.imageGroups.push(this.imgs);
    this.imgs = this.imgs.reverse();
    this.imageGroups.push(this.imgs);
    this.imgs = this.imgs.reverse();
    this.imageGroups.push(this.imgs);

    this.isSmallScreen = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      console.log('current width: ', window.innerWidth);
      this.isSmallScreen = window.innerWidth <= 768;
      console.log(this.isSmallScreen);
    });

    this.imgList.push(...this.imgs);
    this.imgList.push(...this.imgs);
    this.imgList.push(...this.imgs);

    console.log(this.imgList);
  }
}

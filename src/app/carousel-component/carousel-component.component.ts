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

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.interval = 500000;
    config.pauseOnHover = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.imageGroups = [];
    this.imageGroups.push(this.imgs);
    this.imgs = this.imgs.reverse();
    this.imageGroups.push(this.imgs);
    this.imgs = this.imgs.reverse();
    this.imageGroups.push(this.imgs);
  }
}

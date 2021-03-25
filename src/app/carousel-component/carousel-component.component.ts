import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponentComponent implements OnInit {
  @Input() title?;

  @Input() imgs?;

  @Input() isSmallScreen?: boolean;

  @Input() media_type?: string;

  imageGroups = [];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.interval = 500000;
    config.pauseOnHover = true;
  }

  grouplist(data, group) {
    let current = [];
    this.imageGroups = [];
    data.forEach((item) => {
      current.push(item);
      if (current.length === group) {
        this.imageGroups.push(current);
        current = [];
      }
    });
    if (current.length) {
      this.imageGroups.push(current);
    }
  }

  ngOnChanges() {
    this.grouplist(this.imgs, 6);
  }

  ngOnInit(): void {
    this.grouplist(this.imgs, 6);
  }

  openPage(link) {
    window.location.href = link;
  }
}

import { Component, Input } from '@angular/core';

import { Slide } from './slide';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

  @Input("slideContent") slideContent?: Map<string, string[]>;

  headers: string[] = [];
  slidesMap: Map<string, Slide> = new Map<string, Slide>();
  activeSlide?: Slide; 
  activeSlideHeader?: string;

  ngOnChanges() {
    // once slide content has been passed in, set up the carousel
    if (this.slideContent) {
      for (const [header, content] of this.slideContent.entries()) {
        this.headers.push(header);
        this.slidesMap.set(header, new Slide(content));
      }
    }
  }

  selectedHeader(header: string, event: Event) {
    this.activeSlide = this.slidesMap.get(header);

    // set this header opacity to 100%, set all others back to default
    for (let child of document.getElementById("headers")!.children) {
      child.id = "header";
    }

    (event!.target as HTMLElement).id = "activeHeader";
  }
}

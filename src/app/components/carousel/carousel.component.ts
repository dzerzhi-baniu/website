import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnChanges {
  @Input() slides: string[] = [];

  images: GalleryItem[] = [
    new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })
  ]

  ngOnChanges(changes: SimpleChanges): void {
    const newSlides = changes?.['slides']?.currentValue as typeof this.slides

    if (!!newSlides) {
      this.images = newSlides.map(it => new ImageItem({ src: it, thumb: it}))
    }
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ClarityModule} from "@clr/angular";
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {PhotoAlbumComponent} from './photo-album/photo-album.component';
import {ContactsService} from "../services/contacts.service";
import {CarouselComponent} from './carousel/carousel.component';
import {GalleryModule} from "ng-gallery";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotoAlbumComponent,
    CarouselComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhotoAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    GalleryModule
  ],
  providers: [
    ContactsService
  ]
})
export class ComponentsModule {
}

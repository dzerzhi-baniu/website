import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ClarityModule} from "@clr/angular";
// import {BrowserModule} from "@angular/platform-browser";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotoAlbumComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhotoAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    ClarityModule
  ]
})
export class ComponentsModule {
}

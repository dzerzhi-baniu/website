import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ClarityModule} from "@clr/angular";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import {ContactsService} from "../services/contacts.service";


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
    ClarityModule
  ],
  providers: [
    ContactsService
  ]
})
export class ComponentsModule {
}

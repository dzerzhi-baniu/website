import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent {
  @Input() images: string[] = []

}

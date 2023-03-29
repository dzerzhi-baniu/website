import {Component} from '@angular/core';

@Component({
  selector: 'app-frame-type-saunas',
  templateUrl: './frame-type-saunas.page.html',
  styleUrls: ['./frame-type-saunas.page.css']
})
export class FrameTypeSaunasPage {
  images = [
    "IMG-03ac0d1369d092807842cefa30113d92-V.jpg",
    "IMG_20220825_145430.jpg",
    "IMG_20220825_145442.jpg",
    "IMG_20220825_145710.jpg",
    "IMG_20220825_145722.jpg",
    "IMG_20220825_145727.jpg",
    "IMG_20220829_074817_592.jpg",
    "IMG_20220910_110610.jpg",
    "IMG_20220910_110628.jpg",
    "IMG_20220910_110635.jpg",
    "IMG_20220910_110655.jpg",
    "IMG_20220910_110702.jpg",
    "IMG_20220910_110709.jpg",
    "IMG_20220910_110719.jpg",
    "IMG_20220910_110729.jpg",
    "IMG-2c5af3de9dd4e8296b50aa873b7e70cf-V.jpg",
    "IMG-2e80727dea2e391d24aaf552c8457155-V.jpg",
    "IMG-338871f2874391b68c135613647b49c5-V.jpg",
    "IMG-35bc73b0b9e94d4a4dc213c2708b50a9-V.jpg",
    "IMG-44c003659f5ea6c5ba21692f7eaaa1de-V.jpg",
    "IMG-5a6e5598d6c52b759051ab4872e99830-V.jpg",
    "IMG-89deed7d32f4515ee43dad0995c09b8d-V.jpg",
    "IMG-9090957bb059b474fd9e65002cca7220-V.jpg",
    "IMG-9f5c5fd754817985aa09196813011bae-V.jpg",
    "IMG-ac76b177cde2ff582217596958c430ee-V.jpg",
    "IMG-b7bf6313c59b40d2254f8398d0070338-V.jpg",
    "IMG-c3672d9a907249007b980e8d2beb7fbe-V.jpg",
    "IMG-cb4dff5fd05cd2564a0f77d6c410b8d8-V.jpg",
    "IMG-ddec1a70f41563ae348e3bce40abd440-V.jpg",
  ].map(img => `assets/images/III-frame-type-saunas/${img}`)
}

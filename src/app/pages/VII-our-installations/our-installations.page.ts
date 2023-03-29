import { Component } from '@angular/core';

@Component({
  selector: 'app-our-installations',
  templateUrl: './our-installations.page.html',
  styleUrls: ['./our-installations.page.css']
})
export class OurInstallationsPage {
  images = [
    "IMG_20220914_151611.jpg",
    "IMG_20220916_194151.jpg",
    "IMG_20220916_194238.jpg",
    "IMG_20220916_194253.jpg",
    "IMG_20220916_194319.jpg",
    "IMG_20220919_143203.jpg",
    "IMG_20220919_143225.jpg",
    "IMG_20220919_143250.jpg",
    "IMG_20220919_155528.jpg",
    "IMG_20220919_155544.jpg",
    "IMG_20220919_155604.jpg",
    "IMG_20220919_155618.jpg",
    "IMG_20220919_155637.jpg",
    "IMG_20220919_155651.jpg",
    "IMG_20220919_155714.jpg",
    "IMG_20220926_185449.jpg",
    "IMG_20220926_185500.jpg",
    "IMG_20220926_190232.jpg",
    "IMG_20220926_190256.jpg",
    "IMG_20220926_190315.jpg",
    "IMG_20221011_151657.jpg",
    "IMG_20221016_172745.jpg",
    "IMG_20221016_172826.jpg",
    "IMG_20221016_174805.jpg",
    "IMG_20221016_174857.jpg",
    "IMG_20230219_104630.jpg",
    "IMG_20230219_104642.jpg",
    "IMG_20230219_104656.jpg",
    "IMG_20230219_104739.jpg",
    "IMG_20230219_104745.jpg",
    "IMG_20230219_104749.jpg",
    "IMG_20230219_104823.jpg",
  ].map(img => `assets/images/VII-our-installations/${img}`)
}

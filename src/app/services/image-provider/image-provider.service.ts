import {Injectable} from '@angular/core';
import {imageLib, ImgCategory, ImgSize} from "./image-provider.constants";
import {ImageContainer} from "../../common/image-container";

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
  private readonly imageLib: Record<ImgCategory, string[]> = imageLib;

  constructor() {
  }

  public getImageSources({imgCategory: category, imgSize: size}: ImageContainer) {
    const smallChunk = size === ImgSize.SMALL ? '/small' : '';
    const assetsPath = `assets/images/${category}${smallChunk}`;
    const key = Object.keys(this.imageLib).find(key => key.endsWith(assetsPath));

    if (key != undefined) {
      return this.imageLib[key as ImgCategory].map(img => `${assetsPath}/${img}`)
    }

    return [];
  }
}

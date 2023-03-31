import {ImgCategory, ImgSize} from "../services/image-provider/image-provider.constants";
import {ImageProviderService} from "../services/image-provider/image-provider.service";
import {Directive} from "@angular/core";

@Directive()
export abstract class ImageContainer {
  public abstract readonly imgCategory: ImgCategory;

  public constructor(public imageProvider: ImageProviderService) {
  }

  public get imgSize() {
    return ImgSize.SMALL;
  }

  public get images() {
    return this.imageProvider.getImageSources(this);
  }
}

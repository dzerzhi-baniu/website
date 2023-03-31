import {Component} from '@angular/core';
import {ImgCategory} from "../../services/image-provider/image-provider.constants";
import {ImageContainer} from "../../common/image-container";

@Component({
  selector: 'app-frame-type-saunas',
  templateUrl: './frame-type-saunas.page.html',
  styleUrls: ['./frame-type-saunas.page.css']
})
export class FrameTypeSaunasPage extends ImageContainer {
  public readonly imgCategory = ImgCategory.FRAME_TYPE_SAUNAS;
}

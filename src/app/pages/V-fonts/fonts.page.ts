import {Component} from '@angular/core';
import {ImageContainer} from "../../common/image-container";
import {ImgCategory} from "../../services/image-provider/image-provider.constants";

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.page.html',
  styleUrls: ['./fonts.page.css']
})
export class FontsPage extends ImageContainer {
  public readonly imgCategory = ImgCategory.FONTS;
}

import {Component} from '@angular/core';
import {ImageContainer} from "../../common/image-container";
import {ImgCategory} from "../../services/image-provider/image-provider.constants";

@Component({
  selector: 'app-lunar-bases-saunas',
  templateUrl: './lunar-bases-saunas.page.html',
  styleUrls: ['./lunar-bases-saunas.page.css']
})
export class LunarBasesSaunasPage extends ImageContainer {
  public readonly imgCategory = ImgCategory.LUNAR_BASES_SAUNAS;
}

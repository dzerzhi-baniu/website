import { Component } from '@angular/core';
import {ImageContainer} from "../../common/image-container";
import {ImgCategory} from "../../services/image-provider/image-provider.constants";

@Component({
  selector: 'app-barrel-saunas',
  templateUrl: './barrel-saunas.page.html',
  styleUrls: ['./barrel-saunas.page.css']
})
export class BarrelSaunasPage extends ImageContainer {
  public readonly imgCategory = ImgCategory.BARREL_SAUNAS;
}

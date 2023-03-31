import {Component} from '@angular/core';
import {ImageContainer} from "../../common/image-container";
import {ImgCategory} from "../../services/image-provider/image-provider.constants";

@Component({
  selector: 'app-our-installations',
  templateUrl: './our-installations.page.html',
  styleUrls: ['./our-installations.page.css']
})
export class OurInstallationsPage extends ImageContainer {
  readonly imgCategory = ImgCategory.OUR_INSTALLATIONS;
}

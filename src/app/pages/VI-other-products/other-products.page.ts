import { Component } from '@angular/core';
import {ImageContainer} from "../../common/image-container";
import {ImgCategory} from "../../services/image-provider/image-provider.constants";

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.page.html',
  styleUrls: ['./other-products.page.css']
})
export class OtherProductsPage extends ImageContainer{
  readonly imgCategory = ImgCategory.OTHER_PRODUCTS;
}

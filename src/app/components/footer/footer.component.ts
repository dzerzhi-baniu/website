import { Component } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public contacts: ContactsService) {
  }
}

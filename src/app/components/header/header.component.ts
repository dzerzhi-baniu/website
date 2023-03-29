import { Component } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public contacts: ContactsService) {
  }
}

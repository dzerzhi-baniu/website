import {Injectable} from '@angular/core';

interface IPhone {
  number: string,
  caption: string
}

interface IAddress {
  address: string,
  url: string,
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public phones: IPhone[] = [{caption: '+375(25)7122237', number: '+375257122237'}]
  public emails = ['dzerzhi.baniu@gmail.com']
  public address: IAddress = {
    address: "Дзержинский район, деревня Бакиново",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BA%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE"
  }

  constructor() {
  }
}

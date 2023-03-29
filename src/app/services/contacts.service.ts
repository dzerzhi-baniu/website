import {Injectable} from '@angular/core';

interface IPhone {
  number: string,
  caption: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public phones: IPhone[] = [ {caption: '+375(25)7122237', number: '+375257122237'}]
  public emails = ['dzerzhi.baniu@gmail.com']

  constructor() {
  }
}

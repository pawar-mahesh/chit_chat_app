import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequest: WebRequestService) { }

  createNewAccount(userData) {
    return this.webRequest.post('/createNewAccount',userData);
  }
}

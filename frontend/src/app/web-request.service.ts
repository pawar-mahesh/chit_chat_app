import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/user'
  }

  get(url: String) {
    return this.http.get(`${this.ROOT_URL}${url}`);
  }

  post(url: String, userData: User) {
    return this.http.post(`${this.ROOT_URL}${url}`, userData);
  }

}

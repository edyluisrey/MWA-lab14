import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getUser(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

}

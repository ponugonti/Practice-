import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    'Rahul',
    'John',
    'Priya'
  ];

  getUsers() {
    return this.users;
  }

}

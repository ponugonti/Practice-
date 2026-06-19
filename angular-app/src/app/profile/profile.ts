import { Component } from '@angular/core';
import { UserService } from '../services/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html'
})
export class ProfileComponent {

  firstUser = '';

  constructor(
    private userService: UserService
  ) {

    this.firstUser =
      this.userService.getUsers()[0];

  }

}
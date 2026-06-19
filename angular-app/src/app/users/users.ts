import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html'
})
export class UsersComponent {

  users: string[] = [];

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();
  }

}

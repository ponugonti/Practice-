import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding';
import { CustomePipe } from './custome-pipe/custome-pipe';
import { ChildComponent } from './child/child';
import { UsersComponent } from './users/users';
import { ProfileComponent } from './profile/profile';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatabindingComponent,CustomePipe, ChildComponent, UsersComponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}

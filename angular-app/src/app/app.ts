import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding';
import { CustomePipe } from './custome-pipe/custome-pipe';
import { ChildComponent } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatabindingComponent,CustomePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}

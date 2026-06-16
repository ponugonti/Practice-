import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',      
  standalone: true,                  
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.css']  
})
export class UserProfileComponent {
  @Input() username: string = 'Guest';

  
  @Output() logout = new EventEmitter<void>();

  triggerLogout() {
    this.logout.emit();
  }
}

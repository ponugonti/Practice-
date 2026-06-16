import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class DatabindingComponent {

  name = '';
  age = 0;

  submittedName = '';
  submittedAge = 0;

  saveData() {
    this.submittedName = this.name;
    this.submittedAge = this.age;
  }

}

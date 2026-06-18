import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html'
})
export class ChildComponent {

  @Input()
  studentName = '';

  @Output()
  studentSelected =
    new EventEmitter<string>();

  selectStudent() {

    this.studentSelected.emit(
      this.studentName
    );

  }

}
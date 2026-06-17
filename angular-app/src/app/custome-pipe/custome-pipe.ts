import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamefilterPipe } from './namefilter.pipe';

@Component({
  selector: 'app-custome-pipe',
  imports: [CommonModule, NamefilterPipe],
  templateUrl: './custome-pipe.html',
  styleUrl: './custome-pipe.css',
})
export class CustomePipe {
  employees = [

  {
    name:'john',
    salary:50000
  },

  {
    name:'rahul',
    salary:60000
  },

  {
    name:'priya',
    salary:70000
  }

];
}

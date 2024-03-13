import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students = [
    {id:1, name:'arjun'},
    {id:2, name:'bala'},
    {id:3, name:'rajkot'},
  ]
}

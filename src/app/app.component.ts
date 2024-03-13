import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-second-app';
  
  name = "arjun"

  students = [
    { name : 'arjun',semester:3},
    { name : 'bala',semester:3},
    { name : 'darshan',semester:7},
    { name : 'rajkot',semester:3},
  ]
  
  tempStu = {
    name:'',
    semester:0
  }

  addStudent(){
    this.students.push({...this.tempStu});
  }
}

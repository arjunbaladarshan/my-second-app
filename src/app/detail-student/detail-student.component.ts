import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent {
  id = 0;
  constructor(private _route: ActivatedRoute){
    this.id = Number(_route.snapshot.paramMap.get('id'));
  }
}


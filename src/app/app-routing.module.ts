import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ContactComponent } from './contact/contact.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/add',component:AddStudentComponent},
  {path:'students/:id',component:DetailStudentComponent},
  {path:'faculties',component:FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

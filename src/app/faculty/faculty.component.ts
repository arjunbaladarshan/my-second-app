import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

  tempFac = {
    id:'',
    FacultyName:'',
    FacultyInitial:''
  };

  idToUpdate = -1;

  faculites = [
    {id:'1',FacultyName:'arjun',FacultyInitial:'CEAVB'},
    {id:'2',FacultyName:'abcd',FacultyInitial:'CEABC'},
    {id:'3',FacultyName:'def',FacultyInitial:'CEDEF'},
    {id:'4',FacultyName:'ghi',FacultyInitial:'CEGHI'},
  ];

  addFaculty(){
    this.faculites.push({...this.tempFac});
    this.tempFac.id = '';
    this.tempFac.FacultyName = '';
    this.tempFac.FacultyInitial = '';
  }

  editFaculty(){
    for(let i=0;i<this.faculites.length;i++){
      if(Number(this.faculites[i].id)==this.idToUpdate){
        this.faculites[i] = {...this.tempFac};
      }
    }
    this.idToUpdate = -1;
    this.tempFac.id = '';
    this.tempFac.FacultyName = '';
    this.tempFac.FacultyInitial = '';
  }

  setDataFaculty(id:any){
    this.idToUpdate = id;
    for(let i=0;i<this.faculites.length;i++){
      if(Number(this.faculites[i].id)==this.idToUpdate){
        this.tempFac = {...this.faculites[i]};
      }
    }
  }

  deleteFaculty(id:any){
    let indexToDelete = -1; 
    for(let i=0;i<this.faculites.length;i++){
      if(Number(this.faculites[i].id)==id){
        indexToDelete = i;
      }
    }
    this.faculites.splice(indexToDelete,1);
  }
}

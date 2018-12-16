import { Component,OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  noteList: Array<Note>;
  
  constructor(private notesService:NotesService){

  }
  ngOnInit(){
    this.notesService.getNotes().subscribe(response => {
      if (response){
        this.noteList = response;
      } else {
        this.errMessage = 'we are unable to retrieve notes';
      }
    },error => {
        this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }

  addNotes(){
    this.notesService.addNote(this.note).subscribe(response =>{
      if (response){
        this.noteList.push(this.note);
        this.note = new Note();
      } else {
        this.errMessage = 'We are unable to add the selected note.';
      }
    },error => {
        this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }
}

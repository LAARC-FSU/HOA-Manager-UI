import {
  Component,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {note} from "../interfaces";
import {DatePipe} from "@angular/common";
import {fadeAnimation} from "../animations";

@Component({
  selector: 'add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss'],
  animations: [ fadeAnimation]
})
export class AddNoteDialogComponent {
  @Output() note = new EventEmitter();
  currDate = new Date();
  newNote: note = {
    title: '',
    date: this.formatDate(this.currDate),
    body: ''
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    event.preventDefault();
    this.submitForm();
  }

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
  }

  noteForm: FormGroup = this.fb.group({
    title: [this.newNote.title, Validators.required],
    body: [this.newNote.title, Validators.required],
  });

  // Getters for form controls
  get title(): AbstractControl | null {
    return this.noteForm.get('title');
  }

  get body(): AbstractControl | null {
    return this.noteForm.get('body');
  }

  cancel() {
    this.noteForm.reset();
    this.noteForm.markAsUntouched();
  }

  submitForm() {
    if (!this.noteForm.invalid) {
      this.newNote.title = this.title?.value;
      this.newNote.body = this.body?.value;
      this.note.emit(this.newNote);
      this.cancel();
    }
  }


  formatDate(date: Date): string {
    return this.datePipe.transform(date.toDateString(), 'MMM d, y')!;
  }
}

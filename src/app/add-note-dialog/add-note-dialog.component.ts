import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {note} from "../interfaces";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({opacity: 1, height: '*'})),
      state('hidden', style({opacity: 0, height: '0'})),
      transition('visible <=> hidden', [
        animate('500ms ease-in-out'),
        animate('500ms')
      ])
    ])
  ]
})
export class AddNoteDialogComponent {
  @Input() viewNote = true;
  @Output() note = new EventEmitter();
  currDate = new Date();
  newNote: note = {
    title: '',
    date: this.formatDate(this.currDate),
    body: '',
  }

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
  }

  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
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
      this.noteForm.reset();
      this.noteForm.markAsUntouched();
    }
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date.toDateString(), 'MMM d, y')!;
  }
}

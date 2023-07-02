import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'view-note-dialog',
  templateUrl: './view-note-dialog.component.html',
  styleUrls: ['./view-note-dialog.component.scss'],
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
export class ViewNoteDialogComponent{
  @Input() note = {
    title: '',
    date: '',
    body: '',
  }

  @Output() notNew = new EventEmitter;
  @Output() eraseNoteToView = new EventEmitter;
  @ViewChild('titleRef') titleRef!: ElementRef<HTMLInputElement>;
  @ViewChild('bodyRef') bodyRef!: ElementRef<HTMLInputElement>;

  edit = false;

  constructor(private fb: FormBuilder) {
  }

  noteForm: FormGroup = this.fb.group({
    title: [this.note.title, Validators.required],
    body: [this.note.body, Validators.required],
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
    // this.cleanTemp()
    this.edit = false;
  }

  submitForm() {
    if (!this.noteForm.invalid) {
      this.note.title = this.titleRef.nativeElement.value;
      this.note.body = this.bodyRef.nativeElement.value;
    }
    this.edit = false;
  }


  doEdit() {
    this.noteForm.reset();
    this.noteForm.markAsUntouched();

    this.edit = true;

    this.noteForm.patchValue({
      title: this.note.title,
      body: this.note.body
    });
  }
}

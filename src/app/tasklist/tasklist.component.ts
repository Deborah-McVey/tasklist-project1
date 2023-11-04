import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  modalMode: string = '';

  constructor(public dialog: MatDialog) {

  }

  addTask() {
    this.modalMode = "Add Task";
    this.openDialogBox()
  }

  openDialogBox() {
    console.log('hello test');

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        modalMode: this.modalMode,
        name: '',
        dueDate: '',
        priority: '',
        toDo: '',
      }
     });
     console.log(dialogRef)
}}

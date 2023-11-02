import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
export interface DialogData {
  animal: string;
  name: string; 
}

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.component.html',
})
export class DialogOverviewExample {
  cat: string = " ";
  title: string = " ";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.title, animal: this.cat},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cat = result;
    });
  }
}

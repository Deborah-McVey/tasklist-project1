import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialog-overview-example/dialog-overview-example.component';
/* import * as _moment from 'moment'; */

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

/*   const moment = _moment;

  releaseDate = new FormControl(moment("10-20-2020", "MM-DD-YYYY"));

  setDefaultDate() {
    this.studentForm.patchValue({
      dateOfBirth: moment("12/25/1995", "MM/DD/YYYY"),
      admDateRange: {
      startDate: moment("June 01, 2020", "MMM DD,YYYY"),
      endDate: moment("July 31, 2020", "MMM DD,YYYY")
      }
    });
   }  */
}

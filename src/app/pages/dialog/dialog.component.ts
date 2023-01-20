import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

export interface DialogData {
  deporte: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  name!:string;
  deporte!:string;

  constructor(public dialog:MatDialog){}

  openDialog():void{
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { name: this.name, deporte : this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    })
  }

}

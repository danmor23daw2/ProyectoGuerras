import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guerra-dialog',
  templateUrl: './guerra-dialog.component.html',
  styleUrls: ['./guerra-dialog.component.css']
})
export class GuerraDialogComponent {
  paisSeleccionado: any;
  guerras: any[];

  constructor(public dialogRef: MatDialogRef<GuerraDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.paisSeleccionado = data.pais;
    this.guerras = data.guerras;
  }
}

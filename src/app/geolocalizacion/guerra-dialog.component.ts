import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guerra-dialog',
  templateUrl: './guerra-dialog.component.html',
  styleUrls: ['./guerra-dialog.component.css']
})
export class GuerraDialogComponent {
  guerras: any[];
  paisSeleccionado: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.guerras = data.guerras;
  }
}

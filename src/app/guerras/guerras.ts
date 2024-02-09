import { Component } from '@angular/core';

@Component({
  selector: 'aplicacion',
  templateUrl: 'guerras.html',
  styleUrls: ['guerras.css'],
})

export class Guerras {
  selectedOption: string = '';
  selectedTitle: string = 'La guerra santa';
  selectedContent: string = 'Las guerras de religión en Francia, que tuvieron lugar principalmente en el siglo XVI entre católicos y protestantes...';

  onOptionSelected() {
    switch (this.selectedOption) {
      case '1':
        this.selectedTitle = 'La guerra santa';
        this.selectedContent = 'Información sobre la guerra santa...';
        break;
      case '2':
        this.selectedTitle = 'Otro título';
        this.selectedContent = 'Información sobre la otra opción...';
        break;
      case '3':
        this.selectedTitle = 'Otro título más';
        this.selectedContent = 'Información sobre la tercera opción...';
        break;
      default:
        break;
    }
  }
}

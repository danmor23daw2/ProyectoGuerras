import { Component } from '@angular/core';
import { GuerraHistorica } from '../class';

@Component({
    selector: 'aplicacio',
    templateUrl: 'guerras.html',
    styleUrls: ['guerras.css']
})

export class Guerras {
    listaRegistros: GuerraHistorica[] = [];
    nombreGuerra: string = "";
    religion: string = "";
    geopolitica: string = "";
    mostrarTabla: boolean = false;

    registrarGuerra() {
        let guerra: GuerraHistorica = new GuerraHistorica(this.nombreGuerra, this.religion, this.geopolitica);
        this.listaRegistros.push(guerra);
        this.mostrarTabla = false;
    }

    mostrarRegistros() {
        this.mostrarTabla = true;
    }
}

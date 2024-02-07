import { Component, HostListener } from '@angular/core';

@Component({
selector: 'aplicacio',
template: `
<h1>Conflictos: Geopolítica y Religión</h1>
<div class="texto">
    <p>Explora el impacto de los intereses geopolíticos y religiosos en los conflictos mundiales a lo largo de la historia y en el mundo contemporáneo.</p>
    <p class="deslizar">Desliza para ver más</p>
    <div class="lineas">
        <p>|</p>
        <p>|</p>
        <p>|</p>
        <p>|</p>
        <p>|</p>
        <p class="V">V</p>
    </div>
</div>


    <div class="imagen">
        <img src="./assets/gerra.png" style="width: 100%; height: 100%;">
    </div>
    <div class="contenedor" [ngClass]="{'mostrar': mostrarElementos}">

    </div>
    <div class="contenedor-tarjetas" [ngClass]="{'mostrar': mostrarElementos}">
        <mat-card class="ejemplo-tarjeta">
            <mat-card-header>
                <mat-card-title>Geopolítica</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/guerras.png" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>Este es un contenido de tarjeta de ejemplo.</p>
            </mat-card-content>
        </mat-card>
        <mat-card class="ejemplo-tarjeta">
            <mat-card-header>
                <mat-card-title>Religión</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/religion.jpg" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>Este es un contenido de tarjeta de ejemplo.</p>
            </mat-card-content>
        </mat-card>
        <mat-card class="ejemplo-tarjeta">
            <mat-card-header>
                <mat-card-title>Protestas</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/protesta.jpg" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>Este es un contenido de tarjeta de ejemplo.</p>
            </mat-card-content>
        </mat-card>
    </div>
    `,
styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
    .deslizar {
        font-style: italic;
        color: #888;
        font-size: 14px;
        margin-top: 10px;
    }
    .contenedor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 100px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .imagen {
        width: 80%;
        max-width: 400px; 
        margin-left: 60%;
        border-top-left-radius: 60px; 
        border-bottom-right-radius: 60px;
        overflow: hidden;
        margin-top: -18%;
    }

    .texto {
        width: 20%;
        margin-left: 20%;
        margin-right: 50%;
        margin-top: 15%;
        position: relative;
    }
    .lineas p {
        margin: 0;
        font-size: 20px;
    }   
    .lineas {
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contenedor-tarjetas {
        display: flex; 
        justify-content: space-between; 
        color:white;
    }
    .V{
        font-family: 'Arial';
    }
    mat-card-title{
        font-family: "Exo 2", sans-serif;
    }

    .contenedor-tarjetas .ejemplo-tarjeta {
        width: 100%; 
        opacity: 0; 
        margin:4%;
        transition: opacity 0.5s ease; 
        
    }
    .contenedor-tarjetas .ejemplo-tarjeta p {
        margin-top:2%;
        color:white;
    }

    .contenedor.mostrar, .contenedor-tarjetas.mostrar .ejemplo-tarjeta {
        opacity: 1; 
        
    }

    h1 {
        text-align: left;
        margin-left: 10px;
        font-size: 40px;
        margin-top: -50px;
        color: white;
        font-family: "Exo 2", sans-serif;
    }

    p {
        font-family: 'Poor Story', system-ui;
        font-size: 25px;
        color: #333;
    }

    .imagen img {
        width: 50%;
    }

    .ejemplo-tarjeta {
        width: 30%;
        background-color:purple;
    }
    `]
})
export class Inicio {
    mostrarElementos: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const triggerScroll = 0.2; 

    if (scrollPosition > windowHeight * triggerScroll) {
        this.mostrarElementos = true;
    } else {
        this.mostrarElementos = false;
    }
    }

    toggleImage() {

    }
}

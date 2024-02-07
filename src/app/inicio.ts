import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'aplicacio',
  template: `
    <h1>Conflictos: Geopolítica y Religión</h1>
    <div class="texto">
        <p>Explora el impacto de los intereses geopolíticos y religiosos en los conflictos mundiales a lo largo de la historia y en el mundo contemporáneo.</p>
    </div>
    <div class="imagen">
        <img src="./assets/gerra.png" style="width: 100%; height: 100%;">
    </div>
    <div class="container" [ngClass]="{'show': showElements}">

    </div>
    <div class="cards-container" [ngClass]="{'show': showElements}">
        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>Geopolítica</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/guerras.png" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>This is a Shiba Inu.</p>
            </mat-card-content>
        </mat-card>
        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>Religión</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/religion.jpg" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>This is a Shiba Inu.</p>
            </mat-card-content>
        </mat-card>
        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>Card 3</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="./assets/protesta.jpg" style="width: 100%; height: 100%;">
            <mat-card-content>
                <p>This is a Shiba Inu.</p>
            </mat-card-content>
        </mat-card>
    </div>
  `,
  styles: [`
    .container {
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
        border-radius: 60px;
        overflow: hidden;
        margin-top: -15%;
        }

    .texto {
        width: 20%;
        margin-left: 20%;
        margin-right: 50%;
        margin-top: 15%;
    }

    .cards-container {
        display: flex; 
        justify-content: space-between; 
    }

    .cards-container .example-card {
        width: 30%; 
        opacity: 0; 
        transition: opacity 0.5s ease; 
    }

    .container.show, .cards-container.show .example-card {
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
        font-family: Arial, sans-serif;
        font-size: 18px;
        color: #333;
    }

    .imagen img {
        width: 50%;
    }

    .example-card {
        width: 30%;
    }
  `]
})
export class Inicio {
  showElements: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const triggerScroll = 0.2; 

    if (scrollPosition > windowHeight * triggerScroll) {
      this.showElements = true;
    } else {
      this.showElements = false;
    }
  }

  toggleImage() {

  }
}

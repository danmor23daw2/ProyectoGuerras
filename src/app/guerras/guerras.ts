import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';

@Component({
  selector: 'aplicacion',
  templateUrl: 'guerras.html',
  styleUrls: ['guerras.css'],
})

export class Guerras {
  seleccionado: string = '';
  titulo: string = '';
  texto: string = '';
  texto2: string = '';
  imagen: string = ''; 
  imagen1: string = ''; 
  imagen2: string = ''; 

  constructor(private clipboard: Clipboard) { }

  seleccion() {
    switch (this.seleccionado) {
      case '1':
        this.titulo = 'La guerra santa';
        this.texto = 'La noción de la "Guerra Santa" en el Islam, conocida como yihad, abarca un concepto complejo que ha sido interpretado de diversas maneras a lo largo de la historia. Mientras algunos la entienden como un llamado a la lucha armada, es crucial destacar que existe una amplia gama de interpretaciones,\n y no todos los musulmanes la ven como una justificación para la violencia.';
        this.texto2 = 'La yihad se ha asociado con motivos como la defensa contra la opresión, la persecución de musulmanes y, en algunos casos, la expansión justa del Islam. La jerarquía de causas justas incluye la lucha contra la injusticia como la más noble. Sin embargo, es esencial subrayar que la interpretación pacífica y espiritual de la yihad es adoptada por la mayoría de los musulmanes en la actualidad. Este resumen busca ofrecer una comprensión equilibrada de la Guerra Santa en el Islam, reconociendo su diversidad de interpretaciones y destacando el énfasis de la mayoría de los musulmanes en la promoción de la paz y la convivencia pacífica.'
        this.imagen = './assets/guerra4.jpg';
        this.imagen1 = './assets/guerra2.jpg';
        this.imagen2 = './assets/guerra4.png';
        break;
      case '2':
        this.titulo = 'Guerra Fría';
        this.texto = 'Aunque la Guerra Fría fue principalmente un conflicto ideológico y político entre Estados Unidos y la Unión Soviética, también hubo implicaciones religiosas. La Iglesia Católica desempeñó un papel en la resistencia contra el comunismo en Europa del Este, especialmente en países como Polonia con el movimiento sindical Solidaridad liderado por Lech Walesa. En los países del bloque comunista, la práctica religiosa estaba a menudo restringida y la ideología oficial del comunismo promovía un ateísmo estatal. La Iglesia Católica y otras instituciones religiosas fueron perseguidas en varios lugares, especialmente en la Unión Soviética y sus satélites.';
        this.texto2 = 'En muchos países occidentales, la lucha contra el comunismo estuvo vinculada con valores religiosos. El anticomunismo fue a menudo presentado como una defensa contra una ideología que era percibida como ateísta y hostil hacia las creencias religiosas.'
        this.imagen = './assets/fria.jpg'; 
        this.imagen1 = './assets/fria2.jpg'; 
        this.imagen2 = './assets/fria4.jpeg'; 
        break;
      case '3':
        this.titulo = 'Guerra en los Balcanes';
        this.texto = 'Los conflictos en la antigua Yugoslavia fueron complejos y tenían diversas dimensiones, incluyendo las étnicas y religiosas. En algunos casos, como en Bosnia y Herzegovina, se produjeron enfrentamientos entre comunidades católicas, ortodoxas y musulmanas.';
        this.texto2 = 'En algunos casos, la identidad religiosa también desempeñó un papel en los conflictos. Por ejemplo, la Guerra de Bosnia (1992-1995) involucró tensiones entre comunidades musulmanas, ortodoxas serbias y croatas católicas. Las disputas territoriales, especialmente en lugares como Kosovo y Bosnia y Herzegovina, fueron una causa importante. Grupos étnicos diferentes reclamaban territorios disputados, lo que llevó a conflictos violentos por el control y la autonomía.'
        this.imagen = './assets/balca1.jpg'; 
        this.imagen1 = './assets/balca2.jpeg'; 
        this.imagen2 = './assets/balca3.jpg'; 
        break;
      default:
        break;
    }
  }
  copiarTexto() {
    let textoACopiar = '';
    switch (this.seleccionado) {
      case '1':
        textoACopiar = `
          ${this.titulo}
          ${this.texto}
          ${this.texto2}
        `;
        break;
      case '2':
        textoACopiar = `
          ${this.titulo}
          ${this.texto}
          ${this.texto2}
        `;
        break;
      case '3':
        textoACopiar = `
          ${this.titulo}
          ${this.texto}
          ${this.texto2}
        `;
        break;
      default:
        break;
    }
    this.clipboard.copy(textoACopiar);
  }
}


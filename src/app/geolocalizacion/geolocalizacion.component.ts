import { OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Component } from '@angular/core';
import { DatosService } from './datos.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GuerraDialogComponent } from './guerra-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'aplicacio',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})

export class GeolocationComponent implements OnInit {
  continenteSeleccionado: string = '';
  paisSeleccionado: any;
  paises: any[] = [];
  guerras: any[] = [];
  filteredContinentes: Observable<string[]>;
  continents: string[] = ['Asia', 'África', 'América', 'Europa', 'Oceanía'];

  constructor(private datosService: DatosService, private dialog: MatDialog) {
    this.filteredContinentes = new Observable<string[]>(observer => {
      observer.next(this.filterContinents(''));
    }).pipe(
      startWith(''),
      map(value => {
        if (Array.isArray(value)) {
          return this.continents;
        } else {
          return this.filterContinents(value);
        }
      })
    );
  }

  private filterContinents(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.continents.filter(continent => continent.toLowerCase().includes(filterValue));
  }

  cargarContinentes() {
    this.continenteSeleccionado = '';
  }

  buscarPaises(continent: string) {
    if (!continent) return;
    this.datosService.getPaisesPorContinente(continent)
      .subscribe(
        (paises: any[]) => {
          this.paises = paises;
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

  mostrarGuerras(pais: any) {
    this.paisSeleccionado = pais;
    this.guerras = pais.guerras;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GuerraDialogComponent, {
      data: { pais: this.paisSeleccionado, guerras: this.guerras }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('El diálogo se ha cerrado');
    });
    
  }

  ngOnInit(): void {
    this.iniciarMapa();
  }

  iniciarMapa() {
    var view = new View({
      center: [0, 0],
      zoom: 2
    });

    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: view
    });

    var geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: view.getProjection(),
    });

    var accuracyFeature = new Feature();

    var positionFeature = new Feature(new Point([0, 0]));

    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [accuracyFeature, positionFeature]
      })
    });

    map.addLayer(vectorLayer);

    geolocation.on('change:position', function () {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(coordinates) : undefined);
    });

    geolocation.setTracking(true);
  }
}

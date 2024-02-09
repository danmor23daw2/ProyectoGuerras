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
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'aplicacio',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css'] 
})

export class GeolocationComponent implements OnInit {
  continenteSeleccionado = '';
  paisSeleccionado: any;
  paises: any[] = [];
  guerras: any[] = [];
  displayedColumns: string[] = ['nombre', 'paisDe'];
  filaSeleccionada: number = -1;

  constructor(private datosService: DatosService) {
  }

  buscarPaises() {
    if (!this.continenteSeleccionado) return;
    this.datosService.getPaisesPorContinente(this.continenteSeleccionado)
      .subscribe(
        (paises: any[]) => {
          this.paises = paises;
        },
        (error) => {
          console.error('Error fetching countries:', error);
        }
      );
  }
  
  mostrarGuerras(pais: any) {
    this.guerras = pais.guerras;
    this.paisSeleccionado = pais;
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

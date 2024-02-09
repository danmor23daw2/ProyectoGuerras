import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private url = '../assets/guerras.json';

  constructor(private http: HttpClient) {}

  getPaisesPorContinente(continente: string): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data: any) => {
        const continenteData = data.continentes.find((cont: any) => cont.nombre === continente);
        return continenteData ? continenteData.paises : [];
      })
    );
  }
}

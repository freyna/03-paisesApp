import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  private httpParams = new HttpParams().set("fields","name,capital,flags,population,ccn3")

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{ 

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Pais[]>(url, { params:this.httpParams });
  }

  buscarPorCapital (termino: string): Observable<Pais[]>{ 

    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPorRegion (termino: string): Observable<Pais[]>{ 

    const url = `${this.apiUrl}/region/${termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  obtenerPorCodigo (termino: string): Observable<Pais[]>{ 

    const url = `${this.apiUrl}/alpha/${termino}`
    return this.http.get<Pais[]>(url);
  }
}

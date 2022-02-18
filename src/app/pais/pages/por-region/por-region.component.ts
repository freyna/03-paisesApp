import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  obtenerClase(region: string): string {
    return region === this.activeRegion 
          ? 'btn btn-primary'
          : 'btn btn-outline-primary'
  }

  obtenerPaisesRegion(region: string) {
    console.log("obtenerPaisesRegion", region);
    this.activeRegion = region;
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPorRegion(this.activeRegion)
    .subscribe( paises => {
      if(paises.length < 1) {
        this.hayError = true;
      }
      console.info(paises);
      this.paises = paises;      
      
    }, (err)=>{
      console.log("Error");
      console.info(err);
      this.hayError = true;
    });
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPorRegion(this.termino)
    .subscribe( paises => {
      if(paises.length < 1) {
        this.hayError = true;
      }
      console.info(paises);
      this.paises = paises;      
      
    }, (err)=>{
      console.log("Error");
      console.info(err);
      this.hayError = true;
    });
  }

  sugerencias(event:string) {
    this.hayError = false;

    console.log("Sugerencias", event);
  }

}

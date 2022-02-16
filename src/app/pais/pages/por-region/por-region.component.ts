import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
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

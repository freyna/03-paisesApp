import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos   : Pais[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
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

  sugerencias(termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}

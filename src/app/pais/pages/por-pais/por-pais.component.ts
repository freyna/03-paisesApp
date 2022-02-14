import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
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

}

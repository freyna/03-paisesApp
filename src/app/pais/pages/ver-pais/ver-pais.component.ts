import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Pais;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute
    .params
    .pipe(
      switchMap(({id}) => this.paisService.obtenerPorCodigo(id)),
      tap(console.log)
    ).subscribe( pais => {
      this.pais = pais[0];
    });
  //   this.activatedRoute
  //   .params
  //   .subscribe( ({id}) =>{
  //     console.log(id);

  //     this.paisService
  //     .obtenerPorCodigo(id)
  //     .subscribe(pais=>{
  //       console.log(pais);
  //     })
  //   })
 }
}

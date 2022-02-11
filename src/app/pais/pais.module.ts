import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }

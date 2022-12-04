import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerEstadoComponent } from './Components/estado/ver-estado/ver-estado.component';
import { VerInspeccionComponent } from './Components/inspeccion/ver-inspeccion/ver-inspeccion.component';
import { VerTipoComponent } from './Components/tipo/ver-tipo/ver-tipo.component';

const routes: Routes = [
  {
    path:"inicio",
    component:VerInspeccionComponent
  },
  {
    path:"tipos",
    component:VerTipoComponent
  },  
  {
    path:"estados",
    component:VerEstadoComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
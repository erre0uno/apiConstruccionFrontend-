import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//imports
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InspeccionComponent } from './Components/inspeccion/inspeccion/inspeccion.component';
import { VerInspeccionComponent } from './Components/inspeccion/ver-inspeccion/ver-inspeccion.component';
import { AddEditInspeccionComponent } from './Components/inspeccion/add-edit-inspeccion/add-edit-inspeccion.component';
import { AddEditTipoComponent } from './Components/tipo/add-edit-tipo/add-edit-tipo.component';
import { TipoComponent } from './Components/tipo/tipo/tipo.component';
import { VerTipoComponent } from './Components/tipo/ver-tipo/ver-tipo.component';
import { VerEstadoComponent } from './Components/estado/ver-estado/ver-estado.component';
import { EstadoComponent } from './Components/estado/estado/estado.component';
import { AddEditEstadoComponent } from './Components/estado/add-edit-estado/add-edit-estado.component';
import { NabvarComponent } from './Components/nabvar/nabvar.component'
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    InspeccionComponent,
    VerInspeccionComponent,
    AddEditInspeccionComponent,
    AddEditTipoComponent,
    TipoComponent,
    VerTipoComponent,
    VerEstadoComponent,
    EstadoComponent,
    AddEditEstadoComponent,
    NabvarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

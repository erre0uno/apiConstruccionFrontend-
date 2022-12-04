import { Component, OnInit, Input } from '@angular/core';
//imports
import { EstadoService } from 'src/app/Services/estado.service';
import { InspeccionService } from 'src/app/Services/inspeccion.service';
import { TipoService } from 'src/app/Services/tipo.service';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-add-edit-inspeccion',
  templateUrl: './add-edit-inspeccion.component.html',
  styleUrls: ['./add-edit-inspeccion.component.css']
})
export class AddEditInspeccionComponent implements OnInit {

  ListInspeccion$! :Observable<any[]>;
  ListEstados$! : Observable<any[]>
  ListTipo$! : Observable<any[]>


  @Input() inspeccion:any;
  id?:number = 0;
  estado?:string = '';
  comentarios?:string = '';
  tipoInspeccionId?:number;



  constructor(
    private servicioInspeccion:InspeccionService,
    private servicioTipo:TipoService,
    private servicioEstado:EstadoService,

  ) { }

  ngOnInit(): void {
  this.id = this.inspeccion.id;
  this.estado = this.inspeccion.estado;
  this.comentarios = this.inspeccion.comentarios;
  this.tipoInspeccionId = this.inspeccion.tipoInspeccionId;
  this.ListInspeccion$ = this.servicioInspeccion.getInspeccion();
  this.ListEstados$ = this.servicioEstado.getEstados();
  this.ListTipo$ = this.servicioTipo.getTipos();
  }

  agregarInspeccion(){
    var inspection = {
      estado: this.estado,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId
    }
    this.servicioInspeccion.postInspeccion(inspection)
    .subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = 'none';
        }
      },4000)
    })
  }

  updateInspeccion(){
    var inspection = {
      id:this.id,
      estado: this.estado,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId
    }
    let a:any = this.id;
    let id:number=Number(a);
    this.servicioInspeccion.putInspeccion(id,inspection)
    .subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = 'none';
          location.reload();
        }
      },4000)
    })
  }

}

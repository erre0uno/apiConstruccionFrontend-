import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoService } from 'src/app/Services/estado.service';

@Component({
  selector: 'app-ver-estado',
  templateUrl: './ver-estado.component.html',
  styleUrls: ['./ver-estado.component.css']
})
export class VerEstadoComponent implements OnInit {

  ListEstados$!: Observable<any[]>

  title: string = '';
  activateaddeditcomponnetestado: boolean = false;
  estado: any;

  constructor( 
    private servicioEstado:EstadoService,

  ) { }

  ngOnInit(): void {
    this.ListEstados$=this.servicioEstado.getEstados();
  }

  modalAdd(){
    this.estado ={
      id:0,
      opcionEstado:null
    }
    this.title = 'Agregar estado';
    this.activateaddeditcomponnetestado=true;
  }

  modalEdit(item: any) {
    this.estado = item;
    this.title = 'Editar estado';
    this.activateaddeditcomponnetestado = true
  }

  modalclose() {
    this.activateaddeditcomponnetestado = false;
    this.ListEstados$ = this.servicioEstado.getEstados();
  }

  delete(item: any) {
    if (confirm(`Esta seguro de eliminar el registro  ${item.id}`)) {
      this.servicioEstado.deleteEstado(item.id).subscribe(() => {
        var closeModal = document.getElementById('add-edit-modal-close');
        if (closeModal) {
          closeModal.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = 'none';
            location.reload();
          }
        }, 4000);
        this.ListEstados$ = this.servicioEstado.getEstados();
      })
    }
  }



}

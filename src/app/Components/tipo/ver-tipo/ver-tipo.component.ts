import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoService } from 'src/app/Services/tipo.service';

@Component({
  selector: 'app-ver-tipo',
  templateUrl: './ver-tipo.component.html',
  styleUrls: ['./ver-tipo.component.css']
})
export class VerTipoComponent implements OnInit {

  ListTipos$!: Observable<any[]>
  
  //modal
  title: string = '';
  activateaddeditcomponnettipo: boolean = false;
  tipo: any;


  constructor( 
    private servicioTipo:TipoService,

  ) { }

  ngOnInit(): void {
    this.ListTipos$=this.servicioTipo.getTipos ();
  }


  modalAdd(){
    this.tipo ={
      id:0,
      nombre:null
    }
    this.title = 'Agregar tipo de inspeccion';
    this.activateaddeditcomponnettipo=true;
  }

  modalEdit(item: any) {
    this.tipo = item;
    this.title = 'Editar tipo inspeccion';
    this.activateaddeditcomponnettipo = true
  }

  modalclose() {
    this.activateaddeditcomponnettipo = false;
    this.ListTipos$ = this.servicioTipo.getTipos();
  }


  delete(item: any) {
    if (confirm(`Esta seguro de eliminar el registro  ${item.id}`)) {
      this.servicioTipo.deleteTipo(item.id).subscribe(() => {
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
        this.ListTipos$ = this.servicioTipo.getTipos();
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from 'src/app/Models/tipo';
import { InspeccionService } from 'src/app/Services/inspeccion.service';
import { TipoService } from 'src/app/Services/tipo.service';

@Component({
  selector: 'app-ver-inspeccion',
  templateUrl: './ver-inspeccion.component.html',
  styleUrls: ['./ver-inspeccion.component.css']
})

export class VerInspeccionComponent implements OnInit {

  InspectionList$!: Observable<any[]>
  InspectionTypeList$!: Observable<any[]>
  InspectionTypeList: any = [];

  //mapeo de tipoidIspeccion
  InspectionTypeMap: Map<number, string> = new Map();

  //modal
  title: string = '';
  activateaddeditcomponnetinspection: boolean = false;
  inspection: any;

  constructor(
    private servicioInspeccion: InspeccionService,
    private servicioTipo: TipoService,


  ) { }

  ngOnInit(): void {
    this.InspectionList$ = this.servicioInspeccion.getInspeccion();
    this.InspectionTypeList$ = this.servicioTipo.getTipos();
    this.refreshInspectionTypeList()
  }

  refreshInspectionTypeList() {
    this.servicioTipo.getTipos().subscribe(data => {
      this.InspectionTypeList = data;

      for (let i = 0; i < data.length; i++) {
        this.InspectionTypeMap.set(this.InspectionTypeList[i].id,
          this.InspectionTypeList[i].nombre
        );
      }
    });
  }

  modalAdd() {
    this.inspection = {
      id: 0,
      estado: null,
      comentarios: null,
      tipoInspeccionId: null
    }
    this.title = 'Agregar Inspeccion';
    this.activateaddeditcomponnetinspection = true;
  }

  modalEdit(item: any) {
    this.inspection = item;
    this.title = 'Editar Inspeccion';
    this.activateaddeditcomponnetinspection = true
  }

  modalclose() {
    this.activateaddeditcomponnetinspection = false;
    this.InspectionList$ = this.servicioInspeccion.getInspeccion();
  }


  delete(item: any) {
    if (confirm(`Esta gseguro de eliminar el registro ? ${item.id}`)) {
      this.servicioInspeccion.deleteInspeccion(item.id).subscribe(() => {
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
        this.InspectionTypeList$ = this.servicioInspeccion.getInspeccion();
      })
    }
  }


}

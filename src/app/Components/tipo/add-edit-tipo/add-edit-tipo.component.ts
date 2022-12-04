import { Component, OnInit, Input } from '@angular/core';
import { TipoService } from 'src/app/Services/tipo.service';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-add-edit-tipo',
  templateUrl: './add-edit-tipo.component.html',
  styleUrls: ['./add-edit-tipo.component.css']
})
export class AddEditTipoComponent implements OnInit {

  constructor(
    private servicioTipo:TipoService,
  ) { }

  ListTipo$! : Observable<any[]>

  @Input() tipo:any;
  id?:number = 0;
  nombre?:string = '';



  ngOnInit(): void {
    this.id=this.tipo.id;
    this.nombre=this.tipo.nombre;
    this.ListTipo$ = this.servicioTipo.getTipos();
  }

  agregarTipo(){
    var tipo = {
      nombre: this.nombre,
    }
    this.servicioTipo.postTipo(tipo)
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

  updateTipo(){
    var tipo = {
      id:this.id,
      nombre:this.nombre
    }
    let a:any = this.id;
    let id:number=Number(a);
    this.servicioTipo.putTipo(id,tipo)
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

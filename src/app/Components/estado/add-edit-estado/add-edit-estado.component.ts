import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import { EstadoService } from 'src/app/Services/estado.service';

@Component({
  selector: 'app-add-edit-estado',
  templateUrl: './add-edit-estado.component.html',
  styleUrls: ['./add-edit-estado.component.css']
})
export class AddEditEstadoComponent implements OnInit {

  constructor(    
  private servicioEstado:EstadoService,
  ) { }
  
  ListEstados$! : Observable<any[]>

  //input
  @Input() estado:any;
  id?:number = 0;
  opcionEstado?:string = '';


  ngOnInit(): void {
    this.id=this.estado.id;
    this.opcionEstado=this.estado.opcionEstado;
    this.ListEstados$ = this.servicioEstado.getEstados();
  }

  agregarEstado(){
    var estado = {
      opcionEstado: this.opcionEstado,
    }
    this.servicioEstado.postEstado(estado)
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

  updateEstado(){
    var estado = {
      id:this.id,
      opcionEstado:this.opcionEstado
    }
    let a:any = this.id;
    let id:number=Number(a);
    this.servicioEstado.putEstado(id,estado)
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

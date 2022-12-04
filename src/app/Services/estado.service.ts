import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  readonly url = 'https://localhost:44380/';

  constructor(
    private http: HttpClient,
  ) { }

  //metodos
  //get
  public getEstados(): Observable<any[]> {
    return this.http.get<any>(this.url + 'estados');
  }
  //getId
  public getEstadoId(id: number | string): Observable<any> {
    return this.http.get<any>(this.url + 'estados/' + id);
  }
  //post
  public postEstado(data: any) {
    return this.http.post(this.url + 'estados', data);
  }
  //put
  public putEstado(id: number | string, data: any) {
    return this.http.put(this.url + 'estados/' + id, data);
  }
  //delete
  public deleteEstado(id: number | string) {
    return this.http.delete(this.url + 'estados/' + id);
  }
}

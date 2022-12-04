import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  readonly url = 'https://localhost:44380/';

  constructor(
    private http: HttpClient,
  ) { }

  //metodos
  //get
  public getTipos(): Observable<any[]> {
    return this.http.get<any>(this.url + 'tipo');
  }
  //getId
  public getTipoId(id: number | string): Observable<any> {
    return this.http.get<any>(this.url + 'tipo/' + id);
  }
  //post
  public postTipo(data: any) {
    return this.http.post(this.url + 'tipo', data);
  }
  //put
  public putTipo(id: number | string, data: any) {
    return this.http.put(this.url + 'tipo/' + id, data);
  }
  //delete
  public deleteTipo(id: number | string) {
    return this.http.delete(this.url + 'tipo/' + id);
  }




}

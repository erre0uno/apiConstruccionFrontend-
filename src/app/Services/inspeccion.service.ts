import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InspeccionService {

 readonly url = 'https://localhost:44380/';

  constructor(
    private http: HttpClient,
  ) { }

  //metodos
  //get
  public getInspeccion(): Observable<any[]> {
    return this.http.get<any>(this.url + 'inspeccion');
  }
  //getId
  public getInspeccionId(id: number | string): Observable<any> {
    return this.http.get<any>(this.url + 'inspeccion/' + id);
  }
  //post
  public postInspeccion(data: any) {
    return this.http.post(this.url + 'inspeccion', data);
  }
  //put
  public putInspeccion(id: number | string, data: any) {
    return this.http.put(this.url + 'inspeccion/' + id, data);
  }
  //delete
  public deleteInspeccion(id: number | string) {
    return this.http.delete(this.url + 'inspeccion/' + id);
  }

}

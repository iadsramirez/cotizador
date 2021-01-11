import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl='';
  handleError:any;
  constructor(private http: HttpClient) { }

  guardarCliente(cliente:any){
    return this.http.post(environment.baseUrl+'saveCliente',cliente)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  getClientes(): Observable<any> {
    return this.http.get(environment.baseUrl+'obtenerClientes')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  eliminarCliente(objeto:any): Observable<any> {
    return this.http.post(environment.baseUrl+'deleteCliente',objeto)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



  updateCliente(objeto:any): Observable<any> {
    return this.http.put(environment.baseUrl+'actualizarCliente',objeto)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

}

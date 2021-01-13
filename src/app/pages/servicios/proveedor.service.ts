import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  guardarProveedor(prov:any){
    return this.http.post(environment.baseUrlProveedor+'saveProveedor',prov);
  }


  
}

import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../servicios/logins.service';

@Component({
  selector: 'ngx-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  listaClientes:any=[{cia:3,nombre:'UNITED PARCEL SERVICE CO',
  ci:'1791742206001',estado:'ACTIVO',id:1000}];
  lstDocs:any=[{codigo:1,valor:'CI'},{codigo:2,valor:'PASAPORTE'}];
  listaTpCliente:any=[{codigo:1,valor:'JUAN MANUEL SANTOS'},{codigo:2,valor:'MARIA LORENA FUENTE'}];
  
  constructor(private servicio:LoginsService) { 
    this.servicio.logeado=true;
  }

  ngOnInit(): void {
  }



  guardarProveedor(){
    
  }



}

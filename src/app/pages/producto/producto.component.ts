import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../servicios/logins.service';

@Component({
  selector: 'ngx-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  listaClientes:any=[{cia:3,nombre:'SERVICIOS POSTALES DOCUMENTOS OTROS PAISES',
  ci:'1791742206001',estado:'ACTIVO',id:'SERV-1019',cat:'SERVICIOS',exento:'N',prov:''}];
  lstDocs:any=[{codigo:1,valor:'CI'},{codigo:2,valor:'PASAPORTE'}];
  listaTpCliente:any=[{codigo:1,valor:'JUAN MANUEL SANTOS'},{codigo:2,valor:'MARIA LORENA FUENTE'}];
  
  constructor(private servicio:LoginsService) { 
    this.servicio.logeado=true;
  }
  ngOnInit(): void {
  }

}

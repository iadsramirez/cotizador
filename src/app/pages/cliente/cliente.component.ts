import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../servicios/logins.service';

@Component({
  selector: 'ngx-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  listaClientes:any=[{id:193,nombre:'JOSE RODRIGO PINTADO AREVALO, AGROAUSTRO',
  ci:'0100905538',estado:'ACTIVO'}];
  lstDocs:any=[{codigo:1,valor:'CI'},{codigo:2,valor:'PASAPORTE'}];
  listaTpCliente:any=[{codigo:1,valor:'JUAN MANUEL SANTOS'},{codigo:2,valor:'MARIA LORENA FUENTE'}];
  constructor(private servicio:LoginsService) { 
    this.servicio.logeado=true;
  }

  ngOnInit(): void {
  }

}

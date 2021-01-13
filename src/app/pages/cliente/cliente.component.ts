import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../servicios/logins.service';
import { ClienteService } from '../servicios/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { NbToastrService } from '@nebular/theme';
import { ClienteRequest } from '../modelo/ClienteRequest';

@Component({
  selector: 'ngx-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  clienteForm: FormGroup;
  clienteSeleccion:any;

  listaClientes:any;
  lstDocs:any=[{codigo:1,valor:'CI'},{codigo:2,valor:'PASAPORTE'}];
  listaTpCliente:any=[{codigo:1,valor:'NACIONAL'},{codigo:2,valor:'INTERNACIONAL'}];
  constructor(private toastr: NbToastrService,private spinner: NgxSpinnerService,private fb: FormBuilder,private servicio:LoginsService,private clienteService:ClienteService) { 
    this.servicio.logeado=true;
  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.listaClientes=data;
      }
    );

    this.clienteForm = this.fb.group({
      nombre: [''],
      telefono: [''],
      celular: [''],
      ruc:[''],
      idTipoCliente:[''],
    },);

  }

llenadoCliente(){
  this.listaClientes=[];
  this.clienteService.getClientes().subscribe(
    data=>{
     // console.log(JSON.stringify(data));
      this.listaClientes=data;
    }
  );
}


guardarCliente(){
let cliente ={
nombreCliente:this.clienteForm.get('nombre').value,
telefono:this.clienteForm.get('telefono').value,
celular:this.clienteForm.get('celular').value,
ruc:this.clienteForm.get('ruc').value

};

let clienteReq=new ClienteRequest;

clienteReq.cliente=cliente;
this.spinner.show();
this.toastr.info('Cliente Guardado Exitosamente');
this.clienteService.guardarCliente(clienteReq).subscribe(
  data=>{
    console.log(JSON.stringify(data));
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    
  }
);

this.llenadoCliente();




}

confirmaEliminarCliente(){
  console.log('objeto cliente:'+JSON.stringify(this.clienteSeleccion));
  let clienteReq=new ClienteRequest;
  clienteReq.cliente=this.clienteSeleccion;
  this.clienteService.eliminarCliente(clienteReq).subscribe();
  
  this.llenadoCliente();  
  this.toastr.info('Cliente eliminado');

}



eliminarCliente(cliente:any){
this.clienteSeleccion=cliente;
}





}

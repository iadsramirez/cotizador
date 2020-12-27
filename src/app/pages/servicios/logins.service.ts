import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  public logeado: boolean = false;

  constructor(private router:Router) { }

  obtenerUsuario(usu:string){
        
      if(usu=='admin'){
        this.logeado=true;
        this.router.navigate(['./pages/cotizacion']);
      }else{
        this.router.navigate(['./pages/session']);
        this.logeado=false;
      }
  }


}

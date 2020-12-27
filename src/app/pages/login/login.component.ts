import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginsService } from '../servicios/logins.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private servicio:LoginsService) {

    

   }

  ngOnInit(): void {
  }


  onLogin(){
    console.log('valor form:'+JSON.stringify(this.profileForm.value));
    this.servicio.obtenerUsuario(this.profileForm.value.firstName);

  }

}

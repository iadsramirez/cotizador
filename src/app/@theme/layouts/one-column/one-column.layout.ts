import { Component } from '@angular/core';
import { LoginsService } from 'app/pages/servicios/logins.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode  >
      <nb-layout-header fixed style='background-color: rgb(22, 0, 129); ' >
        <ngx-header></ngx-header>
      </nb-layout-header>

    <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive *ngIf="loginServicio.logeado">
      <ng-content select="nb-menu"></ng-content>
    </nb-sidebar>
     

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {

  verMenu:boolean=false;

constructor(public loginServicio:LoginsService){
  console.log('loginServicio'+loginServicio.logeado);
  this.verMenu=loginServicio.logeado;
}
  
}

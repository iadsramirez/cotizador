import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatoscliComponent } from './datoscli/datoscli.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';

import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbAccordionModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbRadioModule
} from '@nebular/theme';


@NgModule({
  imports: [NbCardModule,ReactiveFormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    DatoscliComponent,
    ClienteComponent,
    ProveedorComponent,
    ProductoComponent,
  ],
})
export class PagesModule {
}

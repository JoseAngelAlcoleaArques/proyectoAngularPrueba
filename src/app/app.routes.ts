import {RouterModule, Routes} from '@angular/router';
import {PasComponent} from './components/pas/pas.component';
import {PdiComponent} from './components/pdi/pdi.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {AtencionAlUsuarioComponent} from './components/pas/atencion-al-usuario/atencion-al-usuario.component';
import {InformaticaComponent} from './components/pas/informatica/informatica.component';
import {PolitecnicaComponent} from './components/pdi/politecnica/politecnica.component';
import {EnfermeriaComponent} from './components/pdi/enfermeria/enfermeria.component';
import {CafeteriaComponent} from './components/servicios/cafeteria/cafeteria.component';
import {ReprogComponent} from './components/servicios/reprog/reprog.component';
import {SecretariaComponent} from './components/servicios/secretaria/secretaria.component';

const APP_ROUTES: Routes = [
  { path: 'pas', component: PasComponent, children: [
      { path: 'antencion-al-usuario', component: AtencionAlUsuarioComponent},
      { path: 'informatica', component: InformaticaComponent}
      // { path: '**', pathMatch: 'full', redirectTo: 'antencion-al-usuario'}
    ]},
  { path: 'pdi', component: PdiComponent, children: [
      { path: 'politecnica', component: PolitecnicaComponent},
      { path: 'enfermeria', component: EnfermeriaComponent}
      // { path: '**', pathMatch: 'full', redirectTo: 'politecnica'}
    ]},
  { path: 'servicios', component: ServiciosComponent, children: [
      { path: 'cafeteria', component: CafeteriaComponent},
      { path: 'reprog', component: ReprogComponent},
      { path: 'secretaria', component: SecretariaComponent}
     // { path: '**', pathMatch: 'full', redirectTo: 'cafeteria'}
    ]},
  { path: '**', pathMatch: 'full', redirectTo: 'pas'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

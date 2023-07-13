import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PasComponent } from './components/pas/pas.component';
import { PdiComponent } from './components/pdi/pdi.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

//rutas
import { APP_ROUTING } from './app.routes';
import { AtencionAlUsuarioComponent } from './components/pas/atencion-al-usuario/atencion-al-usuario.component';
import { InformaticaComponent } from './components/pas/informatica/informatica.component';
import { PolitecnicaComponent } from './components/pdi/politecnica/politecnica.component';
import { EnfermeriaComponent } from './components/pdi/enfermeria/enfermeria.component';
import { CafeteriaComponent } from './components/servicios/cafeteria/cafeteria.component';
import { ReprogComponent } from './components/servicios/reprog/reprog.component';
import { SecretariaComponent } from './components/servicios/secretaria/secretaria.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PasComponent,
    PdiComponent,
    ServiciosComponent,
    AtencionAlUsuarioComponent,
    InformaticaComponent,
    PolitecnicaComponent,
    EnfermeriaComponent,
    CafeteriaComponent,
    ReprogComponent,
    SecretariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

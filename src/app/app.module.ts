import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PasComponent } from './components/pas/pas.component';
import { PdiComponent } from './components/pdi/pdi.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AtencionAlUsuarioComponent } from './components/pas/atencion-al-usuario/atencion-al-usuario.component';
import { InformaticaComponent } from './components/pas/informatica/informatica.component';
import { PolitecnicaComponent } from './components/pdi/politecnica/politecnica.component';
import { EnfermeriaComponent } from './components/pdi/enfermeria/enfermeria.component';
import { CafeteriaComponent } from './components/servicios/cafeteria/cafeteria.component';
import { ReprogComponent } from './components/servicios/reprog/reprog.component';
import { SecretariaComponent } from './components/servicios/secretaria/secretaria.component';
import { TableComponent } from './components/table/table.component';
import { PdiHomeComponent } from './components/pdi/pdi-home/pdi-home.component';
import { PasHomeComponent } from './components/pas/pas-home/pas-home.component';
import { TrabajadorformComponent } from './components/trabajadorform/trabajadorform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// rutas
import { APP_ROUTING } from './app.routes';

// services
import { TrabajadoresService } from './services/trabajadores-service';
import { ServiciosHomeComponent } from './components/servicios/servicios-home/servicios-home.component';


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
    SecretariaComponent,
    TableComponent,
    PdiHomeComponent,
    PasHomeComponent,
    TrabajadorformComponent,
    ServiciosHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TrabajadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

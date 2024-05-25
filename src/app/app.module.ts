import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { RegistromiembroComponent } from './registromiembro/registromiembro.component';
import { BusquedamiembroComponent } from './busquedamiembro/busquedamiembro.component';
import { HistorialmiembroComponent } from './historialmiembro/historialmiembro.component';
import { CreacionproyectoComponent } from './creacionproyecto/creacionproyecto.component';
import { AsignaciontareasproyectosComponent } from './asignaciontareasproyectos/asignaciontareasproyectos.component';
import { SeguimientoproyectosComponent } from './seguimientoproyectos/seguimientoproyectos.component';
import { RegistroderechoshumanosComponent } from './registroderechoshumanos/registroderechoshumanos.component';
import { DocumentacionderechoshumanosComponent } from './documentacionderechoshumanos/documentacionderechoshumanos.component';
import { SeguimientoderechoshumanosComponent } from './seguimientoderechoshumanos/seguimientoderechoshumanos.component';
import { RegistropersonalrecursoshumanosComponent } from './registropersonalrecursoshumanos/registropersonalrecursoshumanos.component';
import { AsignacionrolesrecursoshumanosComponent } from './asignacionrolesrecursoshumanos/asignacionrolesrecursoshumanos.component';
import { EvaluacionrecursoshumanosComponent } from './evaluacionrecursoshumanos/evaluacionrecursoshumanos.component';
import { RegistrodeingresofinancieraComponent } from './registrodeingresofinanciera/registrodeingresofinanciera.component';
import { AdministraciondefuentesfinancieraComponent } from './administraciondefuentesfinanciera/administraciondefuentesfinanciera.component';
import { GeneracionreportesfinancieraComponent } from './generacionreportesfinanciera/generacionreportesfinanciera.component';
import { HerrmientacolaboracionComponent } from './herrmientacolaboracion/herrmientacolaboracion.component';
import { ComparticioncolaboracionComponent } from './comparticioncolaboracion/comparticioncolaboracion.component';
import { GestioncalendarioscolaboracionComponent } from './gestioncalendarioscolaboracion/gestioncalendarioscolaboracion.component';
import { CreacionanalisisComponent } from './creacionanalisis/creacionanalisis.component';
import { AnalisisanalisisComponent } from './analisisanalisis/analisisanalisis.component';
import { VisualizacionanalisisComponent } from './visualizacionanalisis/visualizacionanalisis.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';
import { GestionseguridadComponent } from './gestionseguridad/gestionseguridad.component';
import { ImplementacionseguridadComponent } from './implementacionseguridad/implementacionseguridad.component';
import { MonitorieseguridadComponent } from './monitorieseguridad/monitorieseguridad.component';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    RegistromiembroComponent,
    BusquedamiembroComponent,
    HistorialmiembroComponent,
    CreacionproyectoComponent,
    AsignaciontareasproyectosComponent,
    SeguimientoproyectosComponent,
    RegistroderechoshumanosComponent,
    DocumentacionderechoshumanosComponent,
    SeguimientoderechoshumanosComponent,
    RegistropersonalrecursoshumanosComponent,
    AsignacionrolesrecursoshumanosComponent,
    EvaluacionrecursoshumanosComponent,
    RegistrodeingresofinancieraComponent,
    AdministraciondefuentesfinancieraComponent,
    GeneracionreportesfinancieraComponent,
    HerrmientacolaboracionComponent,
    ComparticioncolaboracionComponent,
    GestioncalendarioscolaboracionComponent,
    CreacionanalisisComponent,
    AnalisisanalisisComponent,
    VisualizacionanalisisComponent,
    VisualizacionComponent,
    GestionseguridadComponent,
    ImplementacionseguridadComponent,
    MonitorieseguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
import { GestionseguridadComponent } from './gestionseguridad/gestionseguridad.component';
import { ImplementacionseguridadComponent } from './implementacionseguridad/implementacionseguridad.component';
import { MonitorieseguridadComponent } from './monitorieseguridad/monitorieseguridad.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dashboard/miembros/registro', component: RegistromiembroComponent },
      { path: 'dashboard/miembros/busqueda', component: BusquedamiembroComponent },
      { path: 'dashboard/miembros/historial', component: HistorialmiembroComponent },
      { path: 'dashboard/proyectos/creacion', component: CreacionproyectoComponent },
      { path: 'dashboard/proyectos/asignacion', component: AsignaciontareasproyectosComponent },
      { path: 'dashboard/proyectos/seguimiento', component: SeguimientoproyectosComponent },
      { path: 'dashboard/derechos-humanos/registro', component: RegistroderechoshumanosComponent },
      { path: 'dashboard/derechos-humanos/documentacion', component: DocumentacionderechoshumanosComponent },
      { path: 'dashboard/derechos-humanos/seguimiento', component: SeguimientoderechoshumanosComponent },
      { path: 'dashboard/recursos-humanos/registro', component: RegistropersonalrecursoshumanosComponent },
      { path: 'dashboard/recursos-humanos/asignacion', component: AsignacionrolesrecursoshumanosComponent },
      { path: 'dashboard/recursos-humanos/evaluacion', component: EvaluacionrecursoshumanosComponent },
      { path: 'dashboard/financiera/registro', component: RegistrodeingresofinancieraComponent },
      { path: 'dashboard/financiera/administracion', component: AdministraciondefuentesfinancieraComponent },
      { path: 'dashboard/financiera/reportes', component: GeneracionreportesfinancieraComponent },
      { path: 'dashboard/comunicacion/mensajeria', component: HerrmientacolaboracionComponent },
      { path: 'dashboard/comunicacion/compartir', component: ComparticioncolaboracionComponent },
      { path: 'dashboard/comunicacion/calendarios', component: GestioncalendarioscolaboracionComponent },
      { path: 'dashboard/informes/creacion', component: CreacionanalisisComponent },
      { path: 'dashboard/informes/analisis', component: AnalisisanalisisComponent },
      { path: 'dashboard/informes/visualizacion', component: VisualizacionanalisisComponent },
      { path: 'dashboard/seguridad/gestion', component: GestionseguridadComponent },
      { path: 'dashboard/seguridad/implementacion', component: ImplementacionseguridadComponent },
      { path: 'dashboard/seguridad/monitoreo', component: MonitorieseguridadComponent },
    ]
  },



  // Redirige a 'home' si la URL está vacía
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // Redirige a 'home' si la URL no coincide con ninguna ruta definida
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

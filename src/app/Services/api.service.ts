import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:44329/api/'; // URL de la API

  constructor(private http: HttpClient) { }

  //servicio para login

  authenticate(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl+'Login/authenticate', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError<any>('authenticate'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //registrar una persona
  registerPerson(personData: any): Observable<any> {
    return this.http.post(this.apiUrl+'Personas', personData);
  }

  //buscar personas
  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}Personas`);
  }


  //asignar un empleado y asignar cargos
  createEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Empleadoes`, empleado);
  }

  //registrar un miembro

  createMiembro(miembro: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Miembroes`, miembro);
  }

  //buscar miembro
  getMiembroById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Miembroes/${id}`);
  }

  getPersonaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Personas/${id}`);
  }

  //creacion de proyectos 
  crearProyecto(proyecto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Proyectoes`, proyecto);
  }

  // para asignar personal a un proyecto 

  getProyectoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}Proyectoes/${id}`);
  }

  asignarTarea(tarea: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Participacions`, tarea);
  }


  //ver historial de participacion

  

  getParticipaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}Participacions`);
  }

  //ver todos los proyectos
  getProyectos(): Observable<any> {
    return this.http.get(`${this.apiUrl}Proyectoes`);
  }

  //registrar derechso humanos
  registrarDerechoHumano(derecho: any): Observable<any> {
    return this.http.post(`${this.apiUrl}DerechosHumanoes`, derecho);
  }

  obtenerMiembros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}Miembroes`);
  }

  obtenerDerechosHumanos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}DerechosHumanoes`);
  }

  registrarDefensa(defensa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}Defensas`, defensa);
  }

}
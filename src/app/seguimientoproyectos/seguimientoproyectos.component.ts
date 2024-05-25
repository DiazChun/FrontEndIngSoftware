import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-seguimientoproyectos',
  templateUrl: './seguimientoproyectos.component.html',
  styleUrl: './seguimientoproyectos.component.css'
})
export class SeguimientoproyectosComponent {

  proyectos: any[] = [];  // Aquí se declara la propiedad 'proyectos'

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProyectos().subscribe(
      data => {
        this.proyectos = data;
      },
      error => {
        console.error('Error al obtener los proyectos:', error);
      }
    );
  }
}
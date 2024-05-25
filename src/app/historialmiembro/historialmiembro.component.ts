import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-historialmiembro',
  templateUrl: './historialmiembro.component.html',
  styleUrl: './historialmiembro.component.css'
})
export class HistorialmiembroComponent {

  miembroId!: number;
  miembro: any;
  proyectos: any[] = [];

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    this.apiService.getMiembroById(this.miembroId).subscribe(
      miembroData => {
        this.miembro = miembroData;
        this.apiService.getParticipaciones().subscribe(
          participacionesData => {
            const participaciones = participacionesData.filter((participacion: any) => participacion.miembroId === this.miembro.id);
            this.proyectos = [];
            participaciones.forEach((participacion: any) => {
              this.apiService.getProyectoById(participacion.proyectoId).subscribe(
                proyectoData => {
                  this.proyectos.push(proyectoData);
                }
              );
            });
          }
        );
      },
      error => {
        console.error('Error al buscar el miembro:', error);
      }
    );
  }
}
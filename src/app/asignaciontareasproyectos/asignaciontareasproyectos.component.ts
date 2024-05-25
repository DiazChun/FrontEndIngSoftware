import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-asignaciontareasproyectos',
  templateUrl: './asignaciontareasproyectos.component.html',
  styleUrl: './asignaciontareasproyectos.component.css'
})
export class AsignaciontareasproyectosComponent {

  tareaForm!: FormGroup;
  miembro: any;
  proyecto: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      miembroId: ['', Validators.required],
      proyectoId: ['', Validators.required],
      rol: ['', Validators.required]
    });

    this.tareaForm.get('miembroId')?.valueChanges.subscribe(id => {
      if (id) {
        this.apiService.getMiembroById(id).subscribe(data => {
          this.miembro = data;
        });
      }
    });

    this.tareaForm.get('proyectoId')?.valueChanges.subscribe(id => {
      if (id) {
        this.apiService.getProyectoById(id).subscribe(data => {
          this.proyecto = data;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.tareaForm.valid) {
      this.apiService.asignarTarea(this.tareaForm.value).subscribe(
        response => {
          alert('Tarea asignada:');
          // Maneja la respuesta exitosa aquí
        },
        error => {
          alert('Error al asignar la tarea:');
          // Maneja el error aquí
        }
      );
    }
  }
}

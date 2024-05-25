import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-creacionproyecto',
  templateUrl: './creacionproyecto.component.html',
  styleUrl: './creacionproyecto.component.css'
})
export class CreacionproyectoComponent {

  proyectoForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      presupuesto: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.proyectoForm.valid) {
      this.apiService.crearProyecto(this.proyectoForm.value).subscribe(
        response => {
          alert('Proyecto creado:');
          // Maneja la respuesta exitosa aquí
        },
        error => {
          alert('Error al crear el proyecto:');
          // Maneja el error aquí
        }
      );
    }
  }
}
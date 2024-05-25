import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-asignacionrolesrecursoshumanos',
  templateUrl: './asignacionrolesrecursoshumanos.component.html',
  styleUrl: './asignacionrolesrecursoshumanos.component.css'
})
export class AsignacionrolesrecursoshumanosComponent {

  asignacionForm: FormGroup;
  personas: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.asignacionForm = this.fb.group({
      personaId: ['', Validators.required],
      puesto: ['', Validators.required],
      fechaContratacion: ['', Validators.required],
      salario: ['', [Validators.required, Validators.min(0)]],
      departamento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getPersonas().subscribe((data: any[]) => {
      this.personas = data;
    });
  }

  onSubmit(): void {
    if (this.asignacionForm.valid) {
      this.apiService.createEmpleado(this.asignacionForm.value).subscribe(response => {
        console.log('Empleado creado:', response);
      });
    }
  }
}
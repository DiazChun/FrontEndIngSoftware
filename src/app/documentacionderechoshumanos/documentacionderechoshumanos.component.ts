import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-documentacionderechoshumanos',
  templateUrl: './documentacionderechoshumanos.component.html',
  styleUrl: './documentacionderechoshumanos.component.css'
})
export class DocumentacionderechoshumanosComponent {
  documentacionForm: FormGroup;
  miembros: any[] = [];
  derechos: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.documentacionForm = this.fb.group({
      miembroId: ['', Validators.required],
      derechoId: ['', Validators.required],
      fecha: ['', Validators.required],
      detalles: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerMiembros();
    this.obtenerDerechos();
  }

  obtenerMiembros(): void {
    this.apiService.obtenerMiembros().subscribe(
      data => {
        this.miembros = data;
      },
      error => {
        alert('Error al obtener los miembros:');
      }
    );
  }

  obtenerDerechos(): void {
    this.apiService.obtenerDerechosHumanos().subscribe(
      data => {
        this.derechos = data;
      },
      error => {
        alert('Error al obtener los derechos humanos:');
      }
    );
  }

  onSubmit(): void {
    if (this.documentacionForm.valid) {
      this.apiService.registrarDefensa(this.documentacionForm.value).subscribe(
        response => {
          alert('Defensa registrada:');
          this.documentacionForm.reset();
        },
        error => {
          alert('Error al registrar la defensa:');
        }
      );
    }
  }
}
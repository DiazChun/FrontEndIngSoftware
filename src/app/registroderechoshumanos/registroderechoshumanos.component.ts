import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-registroderechoshumanos',
  templateUrl: './registroderechoshumanos.component.html',
  styleUrl: './registroderechoshumanos.component.css'
})
export class RegistroderechoshumanosComponent {
  derechosForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.derechosForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.derechosForm.valid) {
      this.apiService.registrarDerechoHumano(this.derechosForm.value).subscribe(
        response => {
          alert('Derecho humano registrado:');
          this.derechosForm.reset();
        },
        error => {
          alert('Error al registrar el derecho humano:');
        }
      );
    }
  }
}
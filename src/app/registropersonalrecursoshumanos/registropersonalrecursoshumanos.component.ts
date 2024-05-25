import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registropersonalrecursoshumanos',
  templateUrl: './registropersonalrecursoshumanos.component.html',
  styleUrl: './registropersonalrecursoshumanos.component.css'
})
export class RegistropersonalrecursoshumanosComponent {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      genero: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.apiService.registerPerson(this.registroForm.value).subscribe(
        response => {
          alert('Persona registrada con éxito');
        },
        error => {
          console.error('Error al registrar persona', error);
        }
      );
    }
  }
}
  
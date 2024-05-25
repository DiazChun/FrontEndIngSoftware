import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-registromiembro',
  templateUrl: './registromiembro.component.html',
  styleUrl: './registromiembro.component.css'
})
export class RegistromiembroComponent {

  registroForm: FormGroup;
  personas: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registroForm = this.fb.group({
      personaId: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      activo: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getPersonas().subscribe((data: any[]) => {
      this.personas = data;
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.apiService.createMiembro(this.registroForm.value).subscribe(response => {
        alert('Miembro registrado:');
      });
    }
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-busquedamiembro',
  templateUrl: './busquedamiembro.component.html',
  styleUrl: './busquedamiembro.component.css'
})
export class BusquedamiembroComponent {
  busquedaForm: FormGroup;
  miembro: any = null;
  persona: any = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.busquedaForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.busquedaForm.valid) {
      const id = this.busquedaForm.value.id;
      this.apiService.getMiembroById(id).subscribe(miembro => {
        this.miembro = miembro;
        this.apiService.getPersonaById(miembro.personaId).subscribe(persona => {
          this.persona = persona;
        });
      });
    }
  }
}
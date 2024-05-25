import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) { }

  onSubmit() {
    this.apiService.authenticate(this.username, this.password).subscribe(
      response => {
        if (response.username == this.username) {
          console.log('Login successful', response);
          alert("INICIO DE SESION EXITOSO");
          this.router.navigate(['/dashboard']); // Cambia '/home' a la ruta de tu componente deseado
        } else {
          console.error('Login failed', response);
          this.errorMessage = 'Invalid username or password';
        }
      },
      error => {
        console.error('Login failed', error);
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas';
        } else {
          this.errorMessage = 'A ocurrido un error, favor intente mas tarde';
        }
      }
    );
  }
}
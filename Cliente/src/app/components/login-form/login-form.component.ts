import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  async login() {
    if (this.email && this.password) {
      try {
        const response = await this.authService.login(this.email, this.password);
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/inicio']);
      } catch (error) {
        this.errorMessage = 'Error al iniciar sesión: Credenciales incorrectas';
        console.error('Error al iniciar sesión:', error);
      }
    } else {
      this.errorMessage = 'Por favor, ingrese correo electrónico y contraseña';
    }
  }
}

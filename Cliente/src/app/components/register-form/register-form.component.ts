import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  nameError: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

register() {
    // Validación del nombre
    if (this.name.trim() === '') {
      this.nameError = 'El nombre es requerido';
    } else if (this.name.length < 6 || this.name.length > 255) {
      this.nameError = 'El nombre debe tener entre 6 y 255 caracteres';
    } else {
      this.nameError = '';
    }

    // Validación del correo electrónico
    if (this.email.trim() === '') {
      this.emailError = 'El correo electrónico es requerido';
    } else if (!this.isValidEmail(this.email)) {
      this.emailError = 'Ingrese un correo electrónico válido';
    } else {
      this.emailError = '';
    }

    // Validación de la contraseña
    if (this.password.trim() === '') {
      this.passwordError = 'La contraseña es requerida';
    } else if (this.password.length < 6 || this.password.length > 1024) {
      this.passwordError = 'La contraseña debe tener entre 6 y 1024 caracteres';
    } else {
      this.passwordError = '';
    }


    // Realizar el registro si no hay errores
    if (!this.nameError && !this.emailError && !this.passwordError) {
      this.registerUser();
    }
  }

    // Función para validar el correo electrónico
    isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


  async registerUser() {
    try {
      const response = await this.authService.register(this.name, this.email, this.password);
      console.log('Usuario registrado con exito');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error al registrar el usuario');
    }
  }

}

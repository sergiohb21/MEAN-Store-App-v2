import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  async login() {
    try {
      const response = await this.authService.login(this.email, this.password).then(data => console.log(data));
      console.log('Inicio de sesión exitoso', response);
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.log('Error al iniciar sesión:');
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  name: string = "";
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  async register() {
    try {
      const response = await this.authService.register(this.name, this.email, this.password);
      console.log('Usuario registrado con exito', response);
      this.router.navigate(['/registro']);
    } catch (error) {
      console.log('Error al registrar el usuario');
    }
  }

}

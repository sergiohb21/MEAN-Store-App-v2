import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  jwtDecode   from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl   = 'http://localhost:2525';
  private tokenKey = 'auth-token';
  private usuarioKey = 'Usuario';

  constructor(private router: Router) { }

  async login(email: string, password: string): Promise<any> {
    const dataForm = {
      "email": email,
      "password": password
    };

    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForm)
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const responseData = await response.json();
      console.log(responseData);
      
      // Guardar el token en localStorage
      this.setToken(responseData.data);
      this.router.navigate(["/inicio"]);
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw new Error('Error en la autenticación');
    }
  }

  async register(name: string, email: string, password: string): Promise<any> {
    const dataForm = {
      "name": name,
      "email": email,
      "password": password
    };

    try {
      const response = await fetch(`${this.apiUrl}/registro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForm)
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      return response.json();
    } catch (error) {
      console.error('Error en el registro:', error);
      throw new Error('Error en el registro');
    }
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const tokenInfo = this.parseJwt(token);
      const expTime = tokenInfo.exp * 1000; 
      const ahora = Date.now(); 
      localStorage.setItem("Usuario", JSON.stringify(tokenInfo));
      return expTime > ahora;
    }
    return false;
  }

  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.usuarioKey);
    this.router.navigate(["/login"]);
  }


}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl   = 'http://localhost:2525';
  private tokenKey = 'auth-token';

  constructor() { }

  async login(email: string, password: string): Promise<any> {
    const dataForm = {
      "email": email,
      "password": password
    };

    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        mode: 'cors',
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

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

}


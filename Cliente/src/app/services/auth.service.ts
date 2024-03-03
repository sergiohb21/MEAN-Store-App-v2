import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:2525';

  constructor() { }

  async login(email: string, password: string): Promise<any> {
    const dataForm = {
      email,
      password
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

      return response.json();
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw new Error('Error en la autenticación');
    }
  }
}


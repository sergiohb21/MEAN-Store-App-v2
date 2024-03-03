import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private apiUrl = 'http://localhost:2525/categorias';
  private apiUrl1 = 'https://api.escuelajs.co/api/v1/categories';


  constructor() { }

  async getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const categories: Category[] = await response.json();

      return categories;
    } catch (error) {
      throw error;
    }
  }
}
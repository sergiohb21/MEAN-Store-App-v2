import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = {
    title: '',
    description: '',
    price: 0,
    image: '',
    category: -1
  };

  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    try {
      this.categories = await this.categoryService.getCategories();
       
    } catch (error) {
      console.error('Error cargando categorías:', error);
    }
  }

  async addProduct(): Promise<void> {
    try {
      await this.productService.addProduct(this.product);
      this.router.navigate(['/productos-categoria', this.product.category]);
    } catch (error) {
      console.error('Error añadiendo el producto:', error);
    }
  }
}

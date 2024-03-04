import { Component, NgModule, OnChanges } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, BackButtonComponent, NgFor, NgIf, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  categoryId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.route.params.subscribe(param => {
      this.loadProducts();
    })
  }

  ngOnChanges() {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    const categoryId = parseInt(this.route.snapshot.params['categoriaId']);
    
    if (categoryId) {
      this.products = await this.productService.getProductsCategory(categoryId);
    } else {
      this.products = await this.productService.getProducts();
    }

    this.filterProducts();
  }

  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      // Si no hay término de búsqueda, mostramos todos los productos
      this.filteredProducts = [...this.products];
    } else {
      // Filtramos los productos según el término de búsqueda
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/inicio']);
  }
}
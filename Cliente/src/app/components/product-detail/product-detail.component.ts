import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from '../back-button/back-button.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, FormsModule, BackButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {
  product!: Product;
  productId?: number;
  categoryId!: number;
  formData: any = {};
  showDeleteModal: boolean = false;
  showModifyModal: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['productoId'];
    
    if (this.productId) {
      this.loadProduct(this.productId);
    }
  }

  async loadProduct(productId: number): Promise<void> {
    try {
      if (productId) { 
        this.product = await this.productService.getProduct(productId);
        this.categoryId = this.product.category;
        // Inicializa formData con los datos del producto
        this.formData = {
          _id: this.product._id,
          title: this.product.title,
          description: this.product.description,
          price: this.product.price,
          image: this.product.image
        };
        
      }
    } catch (error) {
      console.error('Error al cargar el producto:', error);
    }
  }
  
  async deleteProduct(): Promise<void> {
    try {
      if (this.productId) {
        await this.productService.deleteProduct(this.productId);
        
        this.router.navigate(['/productos-categoria', this.categoryId]);
      }
      this.showDeleteModal = false;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }
  

  async updateProduct(formData: any): Promise<void> {
    try {
      if(this.productId){
        await this.productService.updateProduct(formData);
        this.showModifyModal = false;
        await this.loadProduct(this.productId);
      }
    } catch (error) {
      console.error('Error al modificar el producto:', error);
    }
  }

  openDeleteModal(): void {
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  openModifyModal(): void {
    this.showModifyModal = true;
  }

  closeModifyModal(): void {
    this.showModifyModal = false;
  }

}

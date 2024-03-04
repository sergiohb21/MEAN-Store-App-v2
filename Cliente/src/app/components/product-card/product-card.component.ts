import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}

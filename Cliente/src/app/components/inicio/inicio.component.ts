import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CategoryCardComponent, NgFor],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  categories?: Category[];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.CategoryService.getCategories().then(categories => {
      this.categories = categories;
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})

export class CategoryCardComponent {
  @Input() category!: Category;

}
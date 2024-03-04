import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';


@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})

export class CategoryCardComponent {
  @Input() category!: Category;

}
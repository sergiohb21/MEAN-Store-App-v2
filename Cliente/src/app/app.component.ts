import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, NavbarComponent, BreadCrumbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  showNavbar: boolean = true;
  title = 'store';

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url.split('/')[1]; // Obtiene la ruta actual (primer segmento después de la barra)
        this.showNavbar = !(currentRoute === 'login' || currentRoute === 'registro');
      }
    });
  }
}

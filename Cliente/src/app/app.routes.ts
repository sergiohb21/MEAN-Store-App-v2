import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'registro', component: RegisterFormComponent },
    { path: 'inicio', component: InicioComponent, data: { breadcrumb: 'Inicio' } },
    { path: 'productos', component: ProductsComponent, data: { breadcrumb: 'Productos' } },
    { path: 'productos-categoria/:categoriaId', component: ProductsComponent, data: { breadcrumb: 'Productos por Categoría' } },
    { path: 'productos/agregar', component: AddProductComponent, data: { breadcrumb: 'Agregar Producto' } },
    { path: 'producto-detalle/:productoId', component: ProductDetailComponent, data: { breadcrumb: 'Detalle del Producto' } },
    { path: '**', redirectTo: '/inicio' } 
];

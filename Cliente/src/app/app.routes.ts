import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'registro', component: RegisterFormComponent },
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] ,data: { breadcrumb: 'Inicio' } },
    { path: 'productos', component: ProductsComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Productos' } }, // Protege la ruta de productos con el guard
    { path: 'productos-categoria/:categoriaId', component: ProductsComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Productos por Categoría' } }, // Protege la ruta de productos por categoría con el guard
    { path: 'productos/agregar', component: AddProductComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Agregar Producto' } }, // Protege la ruta de agregar productos con el guard
    { path: 'producto-detalle/:productoId', component: ProductDetailComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Detalle del Producto' } }, // Protege la ruta de detalle de productos con el guard
    { path: '**', redirectTo: '/login' } 
];

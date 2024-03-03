import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bread-crumbs',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.css'
})
export class BreadCrumbsComponent {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.root),
      map(route => {
        const breadcrumbs: { label: string, url: string }[] = [];
        let currentRoute = route;
        let url = '';
        while (currentRoute) {
          const childrenRoutes = currentRoute.children;
          const primaryChildRoute = childrenRoutes.find(childRoute => childRoute.outlet === 'primary');
          if (!primaryChildRoute) {
            break;
          }
          const routeUrl = primaryChildRoute.snapshot.url.map(segment => segment.path).join('/');
          url += `/${routeUrl}`;
          if (primaryChildRoute.snapshot.data && primaryChildRoute.snapshot.data['breadcrumb']) {
            breadcrumbs.push({
              label: primaryChildRoute.snapshot.data['breadcrumb'],
              url: url
            });
          }
          currentRoute = primaryChildRoute;
        }
        return breadcrumbs;
      })
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}

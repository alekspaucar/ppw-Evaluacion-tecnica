import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'details/:name',

    loadComponent: () => import('./pages/details/details').then(m => m.DetailsComponent)
  },
  { path: '**', redirectTo: '' }
];

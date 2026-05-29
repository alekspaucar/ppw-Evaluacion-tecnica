import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'details/:name',

    loadComponent: () => import('./pages/details/details').then(m => m. Details)
  },
  { path: '**', redirectTo: '' }
];

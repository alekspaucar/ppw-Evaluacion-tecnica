import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Country } from '../../interfaces/country.interface';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="p-8">
      <a routerLink="/" class="btn btn-ghost mb-4">← Volver al listado</a>

      @if (loading()) {
        <div class="text-center">Cargando detalles...</div>
      } @else if (country()) {
        <div class="card bg-base-100 shadow-xl p-6 max-w-lg mx-auto">
          <img [src]="country()?.flags?.png" [alt]="country()?.flags?.alt" class="w-full h-64 object-cover rounded-lg" />
          <h1 class="text-4xl font-bold mt-4">{{ country()?.name?.common }}</h1>
          <div class="mt-4 space-y-2">
            <p class="text-xl"><span class="font-semibold">Capital:</span> {{ country()?.capital?.[0] }}</p>
            <p class="text-xl"><span class="font-semibold">Población:</span> {{ country()?.population?.toLocaleString() }}</p>
          </div>
          <a [href]="country()?.maps?.googleMaps" target="_blank" class="btn btn-primary mt-6">Ver en Google Maps</a>
        </div>
      }
    </div>
  `
})
export class DetailsComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);

  country = signal<Country | null>(null);
  loading = signal(true);

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.api.getCountryByName(name).subscribe({
        next: (data: Country[]) => {
          this.country.set(data[0]);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        }
      });
    }
  }
}

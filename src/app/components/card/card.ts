import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <div class="card-body">
        <h2 class="card-title">{{ item().title }}</h2>
        <p class="text-sm">{{ item().body.substring(0, 50) }}...</p>
        <div class="card-actions justify-end">
          <a [routerLink]="['/details', item().id]" class="btn btn-primary btn-sm">Ver más</a>
        </div>
      </div>
    </div>
  `
})
export class Card {
  item = input.required<any>();
}

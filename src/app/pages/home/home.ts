import { Component, OnInit, signal, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private api = inject(ApiService);
  countries = signal<Country[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.api.getAllCountries().subscribe({
      next: (data: Country[]) => {
        this.countries.set(data);
        this.loading.set(false);
      },
      error: (err: any) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
}

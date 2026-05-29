import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://restcountries.com/v3.1';

  // lista para los paisecs
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all?fields=name,capital,flags`);
  }

  // Detalle de un país por su nOMmbre
  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${name}?fields=name,flags,capital,maps,population`);
  }
}

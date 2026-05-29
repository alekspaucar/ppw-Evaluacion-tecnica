import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemCacheService {
  guardar(item: any): void {
    try {
      localStorage.setItem(`item-cache-${item.id}`, JSON.stringify(item));
    } catch (e) {
      console.error('Error guardando en caché', e);
    }
  }

  getById(id: number | string): any | null {
    const cached = localStorage.getItem(`item-cache-${id}`);
    return cached ? JSON.parse(cached) : null;
  }
}

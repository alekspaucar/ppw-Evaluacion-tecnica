import { TestBed } from '@angular/core/testing';

import { ItemCache } from './item-cache';

describe('ItemCache', () => {
  let service: ItemCache;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCache);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

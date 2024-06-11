/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RickAndMortyServiceService } from './rick-and-morty-service.service';

describe('Service: RickAndMortyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RickAndMortyServiceService]
    });
  });

  it('should ...', inject([RickAndMortyServiceService], (service: RickAndMortyServiceService) => {
    expect(service).toBeTruthy();
  }));
});

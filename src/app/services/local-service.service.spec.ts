import { TestBed, inject } from '@angular/core/testing';

import { LocalServiceService } from './local-service.service';

describe('LocalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalServiceService]
    });
  });

  it('should be created', inject([LocalServiceService], (service: LocalServiceService) => {
    expect(service).toBeTruthy();
  }));
});

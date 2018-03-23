import { TestBed, inject } from '@angular/core/testing';

import { ResourceStatusService } from './resource-status.service';

describe('ResourceStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceStatusService]
    });
  });

  it('should be created', inject([ResourceStatusService], (service: ResourceStatusService) => {
    expect(service).toBeTruthy();
  }));
});

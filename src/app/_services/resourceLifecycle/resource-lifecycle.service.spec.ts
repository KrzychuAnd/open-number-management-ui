import { TestBed, inject } from '@angular/core/testing';

import { ResourceLifecycleService } from './resource-lifecycle.service';

describe('ResourceLifecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceLifecycleService]
    });
  });

  it('should be created', inject([ResourceLifecycleService], (service: ResourceLifecycleService) => {
    expect(service).toBeTruthy();
  }));
});

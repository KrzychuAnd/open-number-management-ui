import { TestBed, inject } from '@angular/core/testing';

import { ResourceTypeService } from './resource-type.service';

describe('ResourceTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceTypeService]
    });
  });

  it('should be created', inject([ResourceTypeService], (service: ResourceTypeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SubsubcategoryService } from './subsubcategory.service';

describe('SubsubcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubsubcategoryService = TestBed.get(SubsubcategoryService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TempdeleteService } from './tempdelete.service';

describe('TempdeleteService', () => {
  let service: TempdeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempdeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

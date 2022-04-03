import { TestBed } from '@angular/core/testing';

import { NewservicesService } from './newservices.service';

describe('NewservicesService', () => {
  let service: NewservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

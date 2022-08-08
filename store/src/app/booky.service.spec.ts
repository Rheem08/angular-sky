import { TestBed } from '@angular/core/testing';

import { BookyService } from './booky.service';

describe('BookyService', () => {
  let service: BookyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

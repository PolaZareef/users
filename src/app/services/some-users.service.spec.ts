import { TestBed } from '@angular/core/testing';

import { SomeUsersService } from './some-users.service';

describe('SomeUsersService', () => {
  let service: SomeUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

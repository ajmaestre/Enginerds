import { TestBed } from '@angular/core/testing';

import { RouteChildGuardGuard } from './route-child-guard.guard';

describe('RouteChildGuardGuard', () => {
  let guard: RouteChildGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteChildGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

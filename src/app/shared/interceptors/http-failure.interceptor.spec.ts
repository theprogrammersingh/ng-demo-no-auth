import { TestBed } from '@angular/core/testing';

import { HttpFailureInterceptor } from './http-failure.interceptor';

describe('HttpFailureInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpFailureInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpFailureInterceptor = TestBed.inject(HttpFailureInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

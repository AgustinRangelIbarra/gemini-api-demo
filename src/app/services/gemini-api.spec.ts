import { TestBed } from '@angular/core/testing';

import { GeminiApi } from './gemini-api';

describe('GeminiApi', () => {
  let service: GeminiApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeminiApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

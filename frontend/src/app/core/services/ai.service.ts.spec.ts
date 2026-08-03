import { TestBed } from '@angular/core/testing';

import { AiServiceTs } from './ai.service.ts';

describe('AiServiceTs', () => {
  let service: AiServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

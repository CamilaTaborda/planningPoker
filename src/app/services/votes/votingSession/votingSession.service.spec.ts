import { TestBed } from '@angular/core/testing';

import { VotingSessionService } from './votingSession.service';

describe('VotingSessionService', () => {
  let service: VotingSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

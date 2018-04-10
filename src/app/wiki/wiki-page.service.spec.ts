import { TestBed, inject } from '@angular/core/testing';

import { WikiPageService } from './wiki-page.service';

describe('WikiPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiPageService]
    });
  });

  it('should be created', inject([WikiPageService], (service: WikiPageService) => {
    expect(service).toBeTruthy();
  }));
});

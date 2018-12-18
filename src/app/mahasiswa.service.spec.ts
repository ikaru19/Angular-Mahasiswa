import { TestBed, inject } from '@angular/core/testing';

import { MahasiswaService } from './mahasiswa.service';

describe('MahasiswaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MahasiswaService]
    });
  });

  it('should be created', inject([MahasiswaService], (service: MahasiswaService) => {
    expect(service).toBeTruthy();
  }));
});

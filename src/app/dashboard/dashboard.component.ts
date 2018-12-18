import { Component, OnInit } from '@angular/core';

import { Mahasiswa } from '../mahasiswa'
import { MahasiswaService } from '../mahasiswa.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mhss : Mahasiswa[] = []

  constructor(private mahasiswaService: MahasiswaService) { }

  ngOnInit() {
    this.getMhs()
  }

  getMhs(): void {
    this.mahasiswaService.getMhs()
      .subscribe(mhss => this.mhss = mhss.slice(0, 10));
  }
}

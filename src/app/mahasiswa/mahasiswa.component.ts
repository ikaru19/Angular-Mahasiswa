import { Component, OnInit } from '@angular/core';

import {Mahasiswa} from '../mahasiswa'
import { MHSI } from '../mock-mahasiswa';
import { MahasiswaService } from '../mahasiswa.service'

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  selectedMhs: Mahasiswa;
  // mhss = MHSI
  mhss :  Mahasiswa[]

  constructor( private mahasiswaService : MahasiswaService) { 
   
  }

  ngOnInit() {
    this.getMhs();
  }

  onSelect(mhs: Mahasiswa): void {
    this.selectedMhs = mhs;
  }

  getMhs() : void{
    this.mahasiswaService.getMhs()
      .subscribe(mhss => this.mhss = mhss)
  }

  delete(mhs: Mahasiswa): void {
    this.mhss = this.mhss.filter(m => m !== mhs);
    this.mahasiswaService.deleteMhs(mhs).subscribe();
  }

}

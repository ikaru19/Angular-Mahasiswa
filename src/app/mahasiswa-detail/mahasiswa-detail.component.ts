import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MahasiswaService }  from '../mahasiswa.service';
import { Mahasiswa } from '../mahasiswa'

@Component({
  selector: 'app-mahasiswa-detail',
  templateUrl: './mahasiswa-detail.component.html',
  styleUrls: ['./mahasiswa-detail.component.css']
})
export class MahasiswaDetailComponent implements OnInit {

  mhs: Mahasiswa;


  constructor( 
    private route: ActivatedRoute,
    private mahasiswaService: MahasiswaService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getMhs()
  }

  getMhs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mahasiswaService.getMahasiswa(id)
      .subscribe(mhs => this.mhs = mhs);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.mahasiswaService.updateMhs(this.mhs)
      .subscribe(() => this.goBack());
  }

 

}

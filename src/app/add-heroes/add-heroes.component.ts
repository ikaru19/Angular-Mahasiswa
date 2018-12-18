import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Mahasiswa } from '../mahasiswa'
import { MahasiswaService } from '../mahasiswa.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css']
})
export class AddHeroesComponent implements OnInit {
  mhss : Mahasiswa[] = []
  selectedJK : string

  constructor( private mahasiswaService: MahasiswaService,private location: Location,private router: Router) { }

  ngOnInit() {
  }

  genId(mhss: Mahasiswa[]): number {
    return mhss.length > 0 ? Math.max(...mhss.map(mahasiswa => mahasiswa.id)) + 1 : 11;
  }

  add(nim:number,nama: string,jk:string,alamat: string,nama_bapak: string,nama_ibu: string,jurusan: string,prodi: string,ipk : number): void {
    nama = nama.trim();
    jk = this.selectedJK
    if (!nama) { return; }
    // var id = this.genId(this.mhss);
    this.mahasiswaService.addMhs({nim, nama , jk , alamat , nama_bapak , nama_ibu, jurusan , prodi , ipk} as Mahasiswa)
      .subscribe(mhs => {
        this.mhss.push(mhs);
        this.router.navigate(['/mahasiswa']);
      });

  }

  radioChangeHandler(event : any){
      this.selectedJK = event.target.value
  }

  goBack(): void {
    this.location.back();
  }

  onChange(deviceValue) {
    console.log(deviceValue);
  }

}

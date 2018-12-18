import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Mahasiswa } from './mahasiswa';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const mhss = [
      { id: 11,nim:1733 , nama: 'Mr. Nice', jk : 'laki - laki' , alamat: 'jl Bromo' , nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'MP' , ipk : 3.2},
      { id: 12,nim:1734 , nama: 'Narco', jk : 'laki - laki' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'TI' , prodi : 'MI' , ipk : 3.2},
      { id: 13,nim:1735 , nama: 'Bombasto', jk : 'laki - laki' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AK' , prodi : 'AK4' , ipk : 3.2 },
      { id: 14,nim:1736 , nama: 'Celeritas', jk : 'perempuan' , alamat: 'jl Bromo' , nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'EL' , prodi : 'EL3' , ipk : 3.2},
      { id: 15,nim:1737 , nama: 'Magneta', jk : 'perempuan' , alamat: 'jl Bromo' , nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AK' , prodi : 'AK3' , ipk : 3.2},
      { id: 16,nim:1738 , nama: 'RubberMan', jk : 'laki - laki' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'MS' , prodi : 'MS3' , ipk : 3.2 },
      { id: 17,nim:1739 , nama: 'Dynama', jk : 'perempuan' , alamat: 'jl Bromo' , nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2},
      { id: 18,nim:1743 , nama: 'Dr IQ', jk : 'laki - laki' , alamat: 'jl Bromo' , nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2},
      { id: 19,nim:1744 , nama: 'Magma', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 20,nim:1745 , nama: 'Tornado', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 21,nim:1746 , nama: 'Krisna', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 22,nim:1747 , nama: 'Zelotes', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 23,nim:1748 , nama: 'Air', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 24,nim:1749 , nama: 'Zuko', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 },
      { id: 25,nim:1750 , nama: 'Thaf', jk : 'perempuan' , alamat: 'jl Bromo', nama_ibu: 'sularmi' , nama_bapak: 'joko' , jurusan:'AN' , prodi : 'AB' , ipk : 3.2 }

    ];
    return {mhss};
  }
    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
 genId(mhss: Mahasiswa[]): number {
    return mhss.length > 0 ? Math.max(...mhss.map(mahasiswa => mahasiswa.id)) + 1 : 11;
  } 
}

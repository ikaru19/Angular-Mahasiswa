import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Mahasiswa } from '../mahasiswa'
import { MahasiswaService } from '../mahasiswa.service'

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  closeResult: string;
  mhss : Mahasiswa[] = []
  selectedJK : string
 
  constructor(private mahasiswaService: MahasiswaService,public authService: AuthService,private modalService: NgbModal,private router: Router) { 
    
  }

  ngOnInit() {
    // this.bodyText = 'This text can be updated in modal 1';
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
    console.log(event.target.value)
    this.selectedJK = event.target.value
}

}

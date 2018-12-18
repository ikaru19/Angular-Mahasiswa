import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Mahasiswa } from '../mahasiswa'
 import { MahasiswaService } from '../mahasiswa.service'
 
@Component({
  selector: 'app-mhs-search',
  templateUrl: './mhs-search.component.html',
  styleUrls: ['./mhs-search.component.css']
})
export class MhsSearchComponent implements OnInit {
  mhss$: Observable<Mahasiswa[]>;
  private searchTerms = new Subject<string>();

  constructor(private mahasiswaService: MahasiswaService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
 

  ngOnInit(): void {
    this.mhss$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mahasiswaService.searchMhs(term)),
    );
  }

}

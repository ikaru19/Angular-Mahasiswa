import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Mahasiswa } from './mahasiswa'
import { MHSI } from './mock-mahasiswa'
import { MessageService } from './message.service'

import { AngularFireDatabase } from 'angularfire2/database';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private heroesUrl = 'api/mhss';  // URL to web api
 
  // private heroesUrl = ' https://uas-mahasiswa.firebaseio.com/rest/Mahasiswa.json';
  // private basePath = '/mahasiswa';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private db: AngularFireDatabase) { }

  getMhs(): Observable<Mahasiswa[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return of(MHSI);
    return this.http.get<Mahasiswa[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getMhs', []))
      );
  }

  getMahasiswa(id: number): Observable<Mahasiswa> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(MHSI.find(mahasiswa => mahasiswa.id === id));

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Mahasiswa>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Mahasiswa>(`getHero id=${id}`))
    );
  }

  updateMhs(mhs: Mahasiswa): Observable<any> {
    return this.http.put(this.heroesUrl, mhs, httpOptions).pipe(
      tap(_ => this.log(`updated mahasiswa id=${mhs.id}`)),
      catchError(this.handleError<any>('updateMahasiswa'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addMhs(mhs: Mahasiswa): Observable<Mahasiswa> {
    return this.http.post<Mahasiswa>(this.heroesUrl, mhs, httpOptions).pipe(
      tap((mhs: Mahasiswa) => this.log(`added hero w/ id=${mhs.id}`)),
      catchError(this.handleError<Mahasiswa>('addMhs'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMhs(mhs: Mahasiswa | number): Observable<Mahasiswa> {
    const id = typeof mhs === 'number' ? mhs : mhs.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Mahasiswa>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted mhs id=${id}`)),
      catchError(this.handleError<Mahasiswa>('deleteMhs'))
    );
  }

  searchMhs(term: string): Observable<Mahasiswa[]> {
    console.log(term)
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Mahasiswa[]>(`${this.heroesUrl}/?nama=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Mahasiswa[]>('searchMhs', []))
    );
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { API } from '../constant/constAPI';
import { Welcome } from '../interface/rick-and-morty-api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

constructor( private http: HttpClient) { }

public get(endpoint: string, queryParams = {}, headers?:any): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http.get(endpoint, { params, observe: 'body', headers }).pipe(take(1));
  }


 getPersonRickandMorty(serach:string=''): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    });
    return this.get(API+`${serach}`, {}, headers)

 }
}

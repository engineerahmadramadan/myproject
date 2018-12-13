// import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
//import {} from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(public http: Http) {

  }
}

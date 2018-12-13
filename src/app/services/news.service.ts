import { Injectable } from '@angular/core';
import { Http, Headers , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/toPromise';
//import 'rxjs';


@Injectable({
  providedIn: 'root'
})
const newsApiUrl = 'http://localhost:53429/api/news';
export class NewsService {
token: any;
news: {
  id: number,
  title: string,
discription: string
};
  constructor(public http: Http, public h: Headers) {
    //access_token
    this.gettoken();
    this.h.append('authorization' , 'Bearer ' + this.token.access_token);
   }
   gettoken()
   {
    this.h  = new Headers();
    if ( this.h.keys['Content-Type'] === null) {
      this.h.append('Content-Type' , 'application/x-www-form-urlencoded');
    }

   // this.h.append('authorization' , 'Bearer ' + this.gettoken());
     if ( localStorage.getItem('zamalektoken') === null)
     {
this.token = this.http.post('http://localhost:53429/token', {grant_type: 'password',
username: 'ahmed', password: '123456789'} , { headers : this.h});
localStorage.setItem('zamalektoken' , this.token);
     } else {
this.token = localStorage.getItem('zamalektoken');
     }

   }

   getAllnews()
   {
   return  this.http.get(newsApiUrl);
   }
   getnewsbyid(id)
   {
   return  this.http.get(newsApiUrl + '/' + id);
   }
   addnews(n)
   {
   return  this.http.post(newsApiUrl, n , {headers: this.h} );
   }
   editnews(n)
   {
   return  this.http.put(newsApiUrl , n , {headers: this.h});
   }

  }

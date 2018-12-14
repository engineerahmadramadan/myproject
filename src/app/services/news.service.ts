import { Injectable } from '@angular/core';
//import { Http, Headers , Response , HttpModule} from '@angular/http';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';

// import 'rxjs/add/operator/map';
// import 'rxjs/operator/delay';
// import 'rxjs/operator/mergeMap';
// import 'rxjs/operator/switchMap';
// import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + 'AnH0EsvEf6Q5VbPhzOFJy58oAFe1ex7oqDIhEHMPkv1VQvOGGk1HJtUq2rxhrXZKWiupoVk3eml9lm7p3URBv8tI_vRvsAWZKLUSmhJrdw3UyTwXHI27AS-Cp3hFkH-pvulPGa-7pLzJ6h4hp-mF3pjed8dn2ePiR1fxjhY9lZJDqKp7ATMG1oMHO4SRkE_4udti_X2qeIaha2zNZa7nrR7KsVs67iYd4PR_Y-n153M'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NewsService {

token: any;
news: {
  id: number,
  title: string,
discription: string
};
  constructor(public httpClient: HttpClient) {
   }
   gettoken() {


     if ( localStorage.getItem('zamalektoken') === null) {
this.token = this.httpClient.post('http://localhost:53429/token', {grant_type: 'password',
username: 'ahmed', password: '123456789'} , { headers : {

}});
console.log('token is ' + this.token);
localStorage.setItem('zamalektoken' , this.token);

     } else {
this.token = localStorage.getItem('zamalektoken');
console.log('token found ' + this.token);
     }

   }
//    createAuthorizationHeader(headers: HttpHeaders) {
//     headers.append('Authorization', 'Basic ' +
//       btoa('ahmed:123456789'));
//   }
   getAllnews()
   {
    //  this.h = new HttpHeaders();
    //  this.createAuthorizationHeader(this.h);
   return  this.httpClient.get('http://localhost:53429/api/news');
   }
   getnewsbyid(id)
   {
   return  this.httpClient.get('http://localhost:53429/api/news' + '/' + id);
   }
   addnews(n)
   {
  //  return  this.httpClient.post('http://localhost:53429/api/news', n , {headers: this.h} );
   }
   editnews(n)
   {
  //  return  this.httpClient.put('http://localhost:53429/api/news' , n , {headers: this.h});
   }

  }

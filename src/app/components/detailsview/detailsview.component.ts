import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './../../services/news.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.css']
})
export class DetailsviewComponent implements OnInit {
id: number;
news: any;
sub: any;
  constructor(public route: ActivatedRoute , public ser: NewsService ) {
   this.sub= this.route.params.subscribe(params => {
      console.log('parms is ' + params['id']);
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
    console.log('id is ' + this.id);
this.ser.getnewsbyid(this.id).subscribe(result => {
  this.news = result;
});
  }

  ngOnInit() {
  }

}

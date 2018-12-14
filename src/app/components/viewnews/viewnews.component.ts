import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-viewnews',
  templateUrl: './viewnews.component.html',
  styleUrls: ['./viewnews.component.css']
})
export class ViewnewsComponent implements OnInit {
news: Array<object> =  [];
  constructor(public NewsSer: NewsService) {
NewsSer.getAllnews().subscribe((result: Array<object>) => {
  this.news = result;
  console.log(this.news);
});
console.log(this.news);
  }

  ngOnInit() {
  }

}

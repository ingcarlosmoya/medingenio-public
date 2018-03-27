import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Article } from '../blog/article';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private blogService: BlogService) {
    this.blogService.getArticlesRightList().subscribe(articles => {
      this.articles = articles.slice(0,2);
    });
   }

  ngOnInit() {
  }

}

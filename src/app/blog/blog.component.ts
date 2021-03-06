import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Article } from './article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

articles : Observable<Article[]>;

  constructor(private blogService: BlogService) {
    this.articles = this.blogService.getArticles();
   }

  ngOnInit() {
   
  }

  

}

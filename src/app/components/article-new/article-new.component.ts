import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  article = {
    name: '',
    description: '',
    available: false};

  submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  createArticle(): void {
    const data = {
      name: this.article.name,
      description: this.article.description
    };

    this.articleService.AddNew(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArticle(): void {
    this.submitted = false;
    this.article = {
      name: '',
      description: '',
      available: false
    };
  }

}



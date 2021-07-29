import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesListComponent} from "./components/articles-list/articles-list.component";
import {ArticleDetailsComponent} from "./components/article-details/article-details.component";
import {ArticleNewComponent} from "./components/article-new/article-new.component";


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'new', component: ArticleNewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

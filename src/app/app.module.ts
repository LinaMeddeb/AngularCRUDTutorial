import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleNewComponent,
    ArticlesListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

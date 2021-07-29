import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const baseURL = 'http://localhost:8080/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }

  GetAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  GetById(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  AddNew(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  deleteById(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}

// posts.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Post} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  postDetails(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + '/' + id);
  }

  createPost(post: Post): Observable<Post> {
    // Make a POST request to create a new post
    return this.http.post<Post>(this.apiUrl, post);
  }
}

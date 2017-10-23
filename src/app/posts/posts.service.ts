import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { post } from "./posts.model";


@Injectable()
export class PostsService {
  private ApiUrlposts = 'http://localhost:3000/posts';
  constructor(private https: Http) { }
  public addPost(post: post): Observable<post> {

    return this.https.post(this.ApiUrlposts, post).map((res: Response) => res.json());
  }
  public getPost(): Observable<post[]> {

    return this.https.get(this.ApiUrlposts).map((res: Response) => res.json());
  }


}

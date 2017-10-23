import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ads } from './ads.model';
@Injectable()
export class AdsService {
  private adsUrl = 'http://localhost:3000/ads';
  constructor(private http: Http) { }
  public getAds(): Observable<ads> {
    return this.http.get(this.adsUrl).map((res: Response) => res.json());
  }
}

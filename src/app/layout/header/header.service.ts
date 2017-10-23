import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {lang} from './header.model';

@Injectable()
export class HeaderService {
   private apilang='http://localhost:3000/lang';
  constructor(private Https:Http) { }
 public getLang():Observable<lang>{
   return this.Https.get( this.apilang).map((res:Response)=>res.json())

 }

}

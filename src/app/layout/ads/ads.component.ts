import { Component, OnInit } from '@angular/core';
import { AdsService } from "./ads.service";
import { ads } from "./ads.model";

@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers:[AdsService]
})
export class AdsComponent implements OnInit {
  public Url: ads;
  constructor(private ads: AdsService) { }

  ngOnInit() {
    this. getAds();
  }
  public getAds() {
    this.ads.getAds().subscribe(res => {
      this.Url = res;
      console.log(this.Url);
    })
  }

}

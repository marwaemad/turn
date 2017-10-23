import { Component, OnInit } from '@angular/core';
import { HeaderService } from "./header.service";
import { lang } from './header.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  public lang: lang;
  public selectedLang: string ;
  public selectedIcon: string ;
  constructor(private langservice: HeaderService) { }

  ngOnInit() {
    this.Lang();
    this.selectedLang = "English";
    this.selectedIcon = "../../../assets/image/en.png";
  }
  public select(lang, icon) {
    this.selectedLang = lang;
    this.selectedIcon = icon;
    this.onHidden();

  }
  public Lang() {
    this.langservice.getLang().subscribe(res => {
      this.lang = res;
      console.log(this.lang);
    });
  }
  public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}

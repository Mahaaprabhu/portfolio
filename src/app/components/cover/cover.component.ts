import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  themeCount:number = 10;
  currentThemeId:number = 9;
  openPopup: boolean = false;
  popupType: string;
  popupContent: string;

  constructor() {
    this.themeRotate();
  }

  ngOnInit(): void {
  }

  themeRotate(): void {
    this.currentThemeId = (this.currentThemeId % this.themeCount) + 1;
    setTimeout(()=>this.themeRotate(), 5000);
  }

  onOpenPopup(popupType: string) {
    this.openPopup = true;
    this.popupType = popupType;
    switch(popupType) {
      case 'PHONE':
        this.popupContent = '+91 8015239799';
        break;
      case 'EMAIL':
        this.popupContent = 'mahAAprabhu @gmail.com';
        break;
    }
  }

  onClosePopups() {
    this.openPopup = false;
  }

}

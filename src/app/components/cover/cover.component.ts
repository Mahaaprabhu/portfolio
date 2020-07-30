import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  themeCount:number = 9;
  currentThemeId:number = 0;
  openPopup: boolean = false;
  popupType: string;
  popupContent: string;
  transtionTimeMilliSeconds: number = 7000;

  constructor() {
    this.themeRotate();
  }

  ngOnInit(): void {
  }

  themeRotate(): void {
    //Extend the night a little bit... I just love it ;)
    this.currentThemeId = (this.currentThemeId % this.themeCount) + 1;
    setTimeout(
      ()=>this.themeRotate(), 
      this.currentThemeId == this.themeCount - 1 ? this.transtionTimeMilliSeconds * 2
                                              : this.transtionTimeMilliSeconds
    );
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  themePointer = 1;
  themeCount = 8;
  theme: boolean[] = [false, true, false, false, false, false, false, false, false];
  openPopup: boolean = false;
  popupType: string;
  popupContent: string;

  constructor() {
    this.themeRotate();
   }

  ngOnInit(): void {
  }

  themeRotate(): void {
    //console.log(this.theme);
    if(this.themePointer === this.themeCount) {
      this.theme[this.themePointer] = false;
      this.theme[1] = true;
      this.themePointer = 1;
    }else {
      this.theme[this.themePointer] = false;
      this.theme[++this.themePointer] = true;
    }
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

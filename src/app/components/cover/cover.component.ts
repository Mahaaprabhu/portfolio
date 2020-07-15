import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  openPopup: boolean = false;
  popupType: string;
  popupContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenPopup(popupType: string) {
    this.openPopup = true;
    this.popupType = popupType;
    switch(popupType) {
      case 'PHONE':
        this.popupContent = '+91 80152 39799';
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

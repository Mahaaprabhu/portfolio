import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input()
  popupType: string;

  @Input()
  popupContent: string;

  @Output()
  closePopup: EventEmitter<any> = new EventEmitter();

  displaySpecialColor: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onClosePopup() {
    this.closePopup.emit();
  }

  onClipboardCopy(): void {
    const dynamicElement: HTMLTextAreaElement = document.createElement('textarea');
    dynamicElement.value = this.getClearedData();
    dynamicElement.style.height = '0';
    dynamicElement.style.width = '0';
    dynamicElement.style.opacity = '0';
    document.body.appendChild(dynamicElement);
    dynamicElement.select();
    document.execCommand('copy');
    document.body.removeChild(dynamicElement);
    this.changeDisplayContent();
  }

  private changeDisplayContent(): void {
    const backupData = this.popupContent;
    this.popupContent = 'COPIED';
    this.displaySpecialColor = true;
    setTimeout(
      () => {
        this.popupContent = backupData;
        this.displaySpecialColor = false;
      },
      1000
    );
  }

  getClearedData(): string {
    return this.popupContent.trim().toLowerCase().replace(' ', '');
  }

}

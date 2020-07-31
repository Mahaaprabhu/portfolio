import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloudbox',
  templateUrl: './cloudbox.component.html',
  styleUrls: ['./cloudbox.component.scss']
})
export class CloudboxComponent implements OnInit {

  activeClouds: boolean[] = [
    false,
    false, false, false, false, false,
    false, false, false, false, false,
  ];

  constructor() {
    this.manageCloudStates();
  }

  ngOnInit(): void {
  }

  manageCloudStates(): void {
    for(let i=0; i<this.activeClouds.length; i++) {
      this.activeClouds[i] = Math.ceil(Math.random()*10) % 2 == 0 ? true: false;
    }
    setTimeout(()=>this.manageCloudStates(), 10000);
  }

}

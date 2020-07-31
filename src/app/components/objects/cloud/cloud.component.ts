import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  cloudType: number = 1;

  constructor() { 
    this.cloudType = Math.ceil((Math.random() * 10));
  }

  ngOnInit(): void {
  }

}

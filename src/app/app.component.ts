import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from './states/global.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private globalStateService: GlobalStateService) {

  }

  ngOnInit() {
    this.globalStateService.setInitialState();
  }
}

import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {MapModeEnum} from './map-mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  map!: string;

  ngOnInit(): void {
    const address = 'Hà Nội, Việt Nam';
    this.map = 'https://www.google.com/maps/embed/v1/' + MapModeEnum.PLACE + '?key=' +
      environment.GOOGLE_API_KEY + '&q=' + encodeURIComponent(address);
  }
}

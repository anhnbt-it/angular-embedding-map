# Nhúng Google Maps vào dự án Angular

Hướng dẫn nhúng Google Maps: https://developers.google.com/maps/documentation/embed/embedding-map

Lưu ý: Để nhúng được iframe thì tạo một Pipe đặt tên là `safe` như sau:

```
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
```

## app.component.html

Sử dụng pipe: `map | safe`

`<iframe width="450" height="250" frameborder="0" style="border:0" [src]="map | safe" allowfullscreen></iframe>`

Nếu không dùng pipe safe thì sẽ nhận thông báo lỗi như này![](https://raw.githubusercontent.com/anhnbt-it/angular-embedding-map/main/src/assets/unsafe.jpg)

## app.component.ts

```
import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {Constant} from './constant.enum';

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
```

## environment.ts

```
export const environment = {
  production: false,
  GOOGLE_API_KEY: 'AIzaSyC-wkWb2I9LZe1JHmkApDXX4wL1swMrsao',
};
```

## map-mode.enum.ts

```
export enum MapModeEnum {
  PLACE = 'place',
  VIEW = 'view',
  DIRECTIONS = 'directions',
  STREETVIEW = 'streetview',
  SEARCH = 'search'
}
```

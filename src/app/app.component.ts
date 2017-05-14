import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {
  configService = null;
  constructor(configService: ConfigService) {
    this.configService = configService
  }

  ngOnInit() {
  }

}

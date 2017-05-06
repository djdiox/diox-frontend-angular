import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  configService = null;
  constructor(configService : ConfigService) {
    this.configService = configService;
   }
  ngOnInit() {
  }

}

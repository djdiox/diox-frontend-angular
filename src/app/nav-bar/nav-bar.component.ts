import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  configService = null;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  ngOnInit() {
  }

  openNav() {
    let myDiv = document.getElementById('mySidenav');
    myDiv.style.width = '100%';
  }


  closeNav() {
    let myDiv = document.getElementById('mySidenav');
    myDiv.style.width = '0';
  }

  setView(view) {
    this.configService.currentView = view;
    this.configService.title = view + ' page'
    this.closeNav();
  }

}

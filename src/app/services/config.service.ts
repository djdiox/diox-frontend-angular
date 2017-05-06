import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  currentView = 'home';
  title = 'home page';
  constructor() {
  }
  setView = (view) => {
    this.currentView = view;
  }
}

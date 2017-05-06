import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  currentView = 'home'
  constructor() {
  }
  setView = (view) => {
    this.currentView = view;
  }
}

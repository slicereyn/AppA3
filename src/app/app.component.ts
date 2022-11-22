import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'home' },
    { title: 'Resgate', url: '/resgate', icon: 'bandage' },
    { title: 'Institucional', url: '/institucional', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

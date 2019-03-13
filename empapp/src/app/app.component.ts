import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav-bar></app-nav-bar>
  <app-emp-list></app-emp-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empapp';
}
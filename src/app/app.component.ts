import { Component } from '@angular/core';

@Component({
  selector: 'portfolio',
  template: `
    <main class="portfolio container">
      <router-outlet></router-outlet>
    </main>
      
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

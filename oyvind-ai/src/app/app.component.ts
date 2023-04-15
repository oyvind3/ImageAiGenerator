import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="app-header">
        <h1 class="text-3xl font-bold text-center py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md rounded-lg">
          Image Generator : prompt your image idea
        </h1>
      </header>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .app-header {
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'oyvind-ai';
}

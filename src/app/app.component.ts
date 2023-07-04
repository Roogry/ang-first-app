import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root', //to describe how Angular refers to the component in templates
  standalone: true, //to describe whether the component requires a ngModule.
  imports: [
    HomeComponent,
    RouterModule,
  ], //to describe the component's dependencies.
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `, //to describe the component's HTML markup and layout.
  styleUrls: ['./app.component.css'], //to list the URLs of the CSS files that the component uses in an array.
})
export class AppComponent {
  title = 'homes';
}

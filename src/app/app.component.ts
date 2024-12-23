import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:`
  <div class="wrapper">
  <header class="banner">
    <img src="/assets/astralis_logo.png" alt="my company logo" class="banner-img">
  </header>

  <nav class="nav-bar">
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/my-work">My Work</a></li>
      <li><a routerLink="/resume">My Resume</a></li>
      <li><a routerLink="/contact">Contact me</a></li>
    </ul>
  </nav>

  <main class="main-content">
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>

  <footer class="footer">
    <nav class="footer-nav">
      <a routerLink="/">Home</a>|
      <a routerLink="/about">About</a>|
      <a routerLink="/my-work">My Work</a>|
      <a routerLink="/resume">Resume</a>|
      <a routerLink="/contact">Contact Me</a>
    </nav>
    <p>&copy; 2024 Astralis Designs</p>
  </footer>
</div>
`
  ,
  styles:``


})
export class AppComponent {
  title = 'portfolio';
}

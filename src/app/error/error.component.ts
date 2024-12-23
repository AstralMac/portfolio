import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <h1 class="error-title">404: Page in Parallel Universe</h1>
      <p class="error-description">
        This page exists... just not in this dimension.
      </p>
      <p class="error-suggestion">
        Try warping to another part of the site!
      </p>
      <button class="home-button" (click)="navigateHome()">Warp Home</button>
    </div>
  `,
  styles: `
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      background-color: #000;
      color: #fff;
      font-family: 'Space Grotesk', sans-serif;
      background-image: url('/assets/404_bckgrn_img.png');
      background-size: cover;
      background-position: center;
    }

    .error-title {
      font-size: 3rem;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .error-description {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #264769;
    }

    .error-suggestion {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #264769;
    }

    .home-button {
      background-color: #264769;
      color: #fff;
      padding: 10px 20px;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .home-button:hover {
      background-color: #1a3d56;
    }
  `,
})
export class ErrorComponent {
  navigateHome() {
    window.location.href = '/'; // Redirect to the home page
  }
}

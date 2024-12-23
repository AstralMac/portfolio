import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <h1 class="title">Let's Get In Touch!</h1>
      <p class="subtitle">I am always open and interested in new opportunities! You can contact me in the following ways:</p>

      <div class="contactSocial">
        <div class="contact-info">
          <h2>Contact Info:</h2>
          <ul class="contact-list">
            <li class="contact-item">
              <a href="mailto:astralisdesignsstl@gmail.com">
                <img src="/assets/email.png" alt="Email" class="contact-icon">
                <span class="contact-text">astralisdesignsstl&#64;gmail.com</span>
              </a>
            </li>
            <li class="contact-item">
              <a href="tel:+13146952160">
                <img src="/assets/phone.png" alt="Phone" class="contact-icon">
                <span class="contact-text">314-695-2160</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="social">
          <h2>Social Platforms:</h2>
          <a href="https://www.linkedin.com/in/malcolm-abdullah-a648241b1/" target="_blank" class="social-link">
            <img src="/assets/linkedin.png" alt="LinkedIn" class="social-icon">
            <h3>LinkedIn</h3>
          </a>
          <a href="https://github.com/AstralMac" target="_blank" class="social-link">
            <img src="/assets/github.png" alt="GitHub" class="social-icon">
            <h3>GitHub</h3>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      font-family: 'Space Grotesk', sans-serif;
      color: #264769;
      background-color: white;
      display: block;
      padding: 20px;
      line-height: 1.6;
    }

    .wrapper {
      max-width: 1200px;
      margin: auto;
      padding: 30px;
      background-color: #f4faff;
      border: 2px solid #264769;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .title, .subtitle {
      text-align: center;
      color: #264769;
    }

    .subtitle {
      font-size: 1.2em;
      margin-top: 10px;
    }

    .contactSocial {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 30px;
    }

    .contact-info, .social {
      flex: 1;
      padding: 20px;
      background-color: white;
      border: 2px solid #264769;
      border-radius: 10px;
      margin: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #264769;
      font-size: 1.5em;
      margin-bottom: 20px;
      text-align: center;
    }

    h3 {
      text-align: center;
      color: #264769;
      font-size: 1.2em;
    }

    .contact-list {
      list-style-type: none;
      padding: 0;
    }

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    .contact-icon {
      width: 100px;
      height: 50px;
      margin-right: 10px;
    }

    .contact-text {
      font-size: 1.1em;
      color: #264769;
    }

    .social-link {
      display: block;
      text-align: center;
      margin: 10px 0;
    }

    .social-icon {
      width: 80px;
      height: 70px;
      margin-bottom: 10px;
    }

    .social a:hover .social-icon {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      .contactSocial {
        flex-direction: column;
      }

      .contact-info, .social {
        flex: none;
        width: 100%;
        margin: 10px 0;
      }
    }
  `
})
export class ContactComponent {}

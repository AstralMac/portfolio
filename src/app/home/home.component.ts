import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class="content-container">
    <h1>Welcome to My Portfolio!</h1>
    <p class="subtext">A collection of my current and past works, accomplishments, resume, and contact information.</p>

    <h2>A Little Bit About Me</h2>
    <div class="intro-goals-container">
      <div class="highlight-ig-container">
        <h4>Introduction:</h4>
        <p>
          Hi, I’m Malcolm Abdullah, an aspiring Web Developer and Designer. I’m graduating from Bellevue University in March 2025 with a strong foundation in building dynamic and user-friendly web applications.
        </p>
        <p>I specialize in:</p>
        <ul>
          <li>Front-end Development with HTML, CSS, JavaScript, and Angular w/ TypeScript</li>
          <li>Back-end Integration using Python, MongoDB, and JSON</li>
        </ul>
        <p>
          With hands-on experience in full-stack development and a passion for creating intuitive, responsive designs, I’m excited to start my career in web development. Feel free to explore my work, and let’s connect to bring innovative ideas to life!
        </p>
      </div>

      <div class="highlight-ig-container">
        <h4>My Professional Goals/Objectives:</h4>
        <ol>
          <li>Create Engaging and User-Centric Web Experiences</li>
          <p>Develop intuitive and visually appealing websites that enhance user experience while meeting modern design and accessibility standards.</p>

          <li>Expand My Full-Stack Development Skills</li>
          <p>Continue improving my knowledge of front-end and back-end technologies, including frameworks like Angular and tools like MongoDB, to build robust, full-stack applications.</p>

          <li>Stay Current with Emerging Technologies</li>
          <p>Stay updated with the latest trends, tools, and practices in web development, such as exploring frameworks, AI integration, and performance optimization.</p>

          <li>Collaborate on Real-World Projects</li>
          <p>Work with teams and clients to create functional, impactful web solutions, learning and growing through collaboration with other developers and designers.</p>

          <li>Build a Strong Professional Portfolio</li>
          <p>Continuously develop and showcase projects that highlight my creativity, technical abilities, and problem-solving skills to attract future employers and freelance opportunities.</p>
        </ol>
      </div>
    </div>

    <h2>Find Me On GitHub!</h2>
    <a href="https://github.com/AstralMac" target="_blank" class="github-link">You can find my most recent code here on GitHub!</a>
    <div class="github-container">
      <img src="/assets/github_screenshot.png" alt="screenshot of Malcolm's GitHub profile" class="github-screenshot">
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
    line-height: 1.6;a
  }

  .content-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background: #f4faff;
    border: 2px solid #264769;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1, h2 {
    text-align: center;
    color: #264769;
  }

  .subtext {
    text-align: center;
    font-size: 1.1em;
    color: #264769;
  }

  .intro-goals-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .highlight-ig-container {
    flex: 1;
    background: white;
    border: 2px solid #264769;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h4 {
    color: #264769;
    margin-bottom: 10px;
    font-size: 1.2em;
  }

  ul, ol {
    margin-left: 20px;
  }

  ul li, ol li {
    margin-bottom: 10px;
  }

  .github-link {
    display: block;
    text-align: center;
    color: #264769;
    font-weight: bold;
    text-decoration: none;
    margin: 20px 0;
  }

  .github-link:hover {
    text-decoration: underline;
  }

  .github-container {
    text-align: center;
  }

  .github-screenshot {
    max-width: 100%;
    height: auto;
    border: 2px solid #264769;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .intro-goals-container {
      flex-direction: column;
    }
  }
  `
})
export class HomeComponent {}

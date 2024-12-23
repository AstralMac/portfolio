import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
  <div class="about-wrapper">
    <p class="quote">"Having ADHD is like having a brain full of browser tabs—except half of them are frozen, and one is playing music you can't find. But in the chaos lies brilliance; sometimes, it's the tab you least expect that sparks innovation!"</p>

    <h1 class="title">About Me:</h1>
    <div class="bio">
      <div class="profile-pic-container">
        <img src="/assets/profile_pic.jpeg" alt="Malcolm's profile picture thumbnail">
      </div>
      <div class="bio-text">
        <h3>Creative Problem-Solver with a Passion for Learning</h3>
        <p>
        Born and raised in St. Louis, MO, as the oldest of 11 siblings, I’ve spent my life honing leadership skills, multitasking like a pro, and finding creative solutions to chaos. Now at 30, I bring that same energy and drive to every project I take on.

        With hobbies like producing music, photography, working on cars, boxing, cooking, and diving into books, I’ve mastered the art of blending hands-on creativity with a thirst for knowledge. My interests span manga, anime, psychology, philosophy, business, web design, and organization. Simply put: I love learning new things and turning ideas into action.

        In work, I’m known for tackling challenges with enthusiasm, humor, and a unique perspective. Whether I’m crafting engaging websites, optimizing workflows, or brainstorming innovative solutions, I approach every task with curiosity and dedication. If you need someone who can bring fresh ideas, practical execution, and a dash of creativity to the table, let’s connect—I’d love to help bring your vision to life!</p>
      </div>
    </div>

    <div class="higf-container">
      <div class="hi">
        <h5>Hobbies & Interests:</h5>
        <ol>
          <li>Producing Music</li>
          <li>Cooking</li>
          <li>Reading Manga</li>
          <li>Learning new things</li>
          <li>Working on cars</li>
          <li>Boxing</li>
        </ol>
      </div>
      <div class="goals">
        <h5>Goals:</h5>
        <ul>
          <li>Find a stable career in the web development industry.</li>
          <li>Build and launch my "Personal Brand".</li>
          <li>Establish Credibility and Demonstrate Versatility.</li>
          <li>Experiment with Innovation</li>
          <li>Network and collaborate with like-minded individuals.</li>
        </ul>
      </div>
      <div class="funFacts">
        <h5>Fun Facts:</h5>
        <ul>
          <li>I love to read manga and watch anime in my spare time.</li>
          <li>I love working on cars! It is a hobby I do not get to do often but find it a wonderful craft!</li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: `
  .about-wrapper {
    margin: auto;
    border: 15px solid #264769;
    background-color: #264769;
    color: white;
    max-width: 100%;
    padding: 25px;
    border-radius: 15px;
    font-family: 'Quantico', 'Space Grotesk', sans-serif;
  }

  .quote {
    text-align: center;
    font-style: italic;
    font-size: 1.2em;
  }

  .bio {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }

  .profile-pic-container img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid white;
    margin-right: 20px;
  }

  .bio-text {
    max-width: 70%;
  }

  .bio-text h3 {
    text-decoration: underline;
    margin-bottom: 10px;
  }

  .higf-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 30px;
  }

  .hi, .goals, .funFacts {
    flex: 1;
    border: 2px dotted white;
    border-radius: 10px;
    background-color: #1a2e40;
    padding: 15px;
    color: white;
    text-align: center;
  }

  .hi h5, .goals h5, .funFacts h5 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .hi ol, .goals ul, .funFacts ul {
    list-style: none;
    padding: 0;
  }

  .hi ol li, .goals ul li, .funFacts ul li {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    .higf-container {
      flex-direction: column;
    }
  }
  `
})
export class AboutComponent {}


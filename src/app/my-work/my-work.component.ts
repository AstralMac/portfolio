import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
  <div class="work-container">
    <h1>Check Out My Work:</h1>
    <div *ngIf="myWork.length > 0; else noWork">
      <div class="work-grid">
        <div class="work-card" *ngFor="let work of myWork">
          <h3>{{work.title}}</h3>
          <p>{{work.description}}</p>
          <p>
            <a href="{{work.link}}" target="_blank" class="work-link">{{work.link}}</a>
          </p>
        </div>
      </div>
    </div>
    <ng-template #noWork>
      <h2 *ngIf="errorMessage" class="error-message">{{errorMessage}}</h2>
      <h2 *ngIf="!errorMessage">Page in a parallel universe.</h2>
    </ng-template>
  </div>
  `,
  styles: `
  .work-container {
    padding: 20px;
    margin: auto;
    max-width: 1200px;
    background: linear-gradient(145deg, #1b1b2f, #0f0f1f);
    color: #ffffff;
    border: 3px solid #264769;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.7), 0px 0px 15px 2px #00ffff;
  }

  h1, h2 {
    text-align: center;
    color: #00ffff;
    text-shadow: 0px 0px 10px #00ffff;
    margin-bottom: 20px;
  }

  .work-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .work-card {
    background: linear-gradient(145deg, #0d0d1a, #1c1c2b);
    border: 2px solid #00ffff;
    border-radius: 10px;
    padding: 15px;
    width: 300px;
    color: #ffffff;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px 2px #00ffff;
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
    word-wrap: break-word;
  }

  .work-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.7), 0px 0px 15px 5px #00ffff;
  }

  .work-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    color: #00ffcc;
    text-shadow: 0px 0px 10px #00ffcc;
  }

  .work-card p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    overflow-wrap: break-word;
  }

  .work-link {
    color: #00ffff;
    text-decoration: none;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .work-link:hover {
    text-decoration: underline;
  }

  .error-message {
    color: #ff5050;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    .work-card {
      width: 90%;
    }
  }
  `
})
export class MyWorkComponent {
  myWork: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {
    this.fetchMyWork();
  }

  fetchMyWork(): void {
    this.http.get<any[]>('http://localhost:3000/api/my-work').subscribe({
      next: (data) => {
        this.myWork = data;
      },
      error: (err) => {
        console.error('Message lost in translation.', err);
        this.errorMessage = 'Lost in the cosmic dust... Check Back Later!';
      }
    });
  }
}

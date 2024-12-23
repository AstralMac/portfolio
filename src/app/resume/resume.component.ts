import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
  <div class="resume-container">
    <h1 class="title">My Resume:</h1>

    <div class="accordion-container">
      <!-- My Info Section -->
      <div class="accordion">
        <button class="accordion-button">
          <span class="accordion-icon">+</span> My Info
        </button>
        <div class="accordion-content">
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
      </div>

      <!-- Objective Section -->
      <div class="accordion">
        <button class="accordion-button">
          <span class="accordion-icon">+</span> Objective
        </button>
        <div class="accordion-content">
          <p>Hi, I’m Malcolm Abdullah, an aspiring Web Developer and Designer graduating in March 2025 from Bellevue University with a strong foundation in building dynamic, user-friendly web applications. I specialize in:</p>
          <br/>
          <ul>
            <li>Front-End Development: HTML, CSS, JavaScript, Angular w/ TypeScript</li>
            <li>Back-End Integration: Python, MongoDB, JSON</li>
          </ul>
          <br/>
          <p>I’m passionate about creating intuitive, responsive designs and am excited to begin my career in web development. Let’s connect and bring innovative ideas to life!</p>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div class="accordion">
        <button class="accordion-button">
          <span class="accordion-icon">+</span> Work Experience
        </button>
        <div class="accordion-content">
          <div class="job">
            <h3>Voice & Video Engineer - Spectrum (2021 - Present)</h3>
            <ul>
              <li>Design, implement, and troubleshoot voice and video communication systems.</li>
              <li>Collaborate cross-functionally with engineers and customers to resolve technical issues and enhance product performance.</li>
              <li>Provide ongoing technical support and training to team members.</li>
            </ul>
          </div>
          <div class="job">
            <h3>Customer Service Representative - Charter Communications (2021)</h3>
            <ul>
              <li>Delivered technical assistance for internet services, ensuring customer satisfaction.</li>
              <li>Communicated with internal teams to streamline issue resolution processes.</li>
              <li>Promoted company brand by providing a positive customer experience.</li>
            </ul>
          </div>
          <div class="job">
            <h3>Lead Line Cook - Wildwood Pub and Grill (2014 - 2018)</h3>
            <ul>
              <li>Managed kitchen operations and ensured high-quality food service.</li>
              <li>Designed and updated menus to boost sales.</li>
              <li>Provided leadership and mentorship to kitchen staff.</li>
            </ul>
          </div>
          <div class="job">
            <h3>Fertilization Technician/Crew Leader - Dowco Enterprise Inc (2017 - 2018)</h3>
            <ul>
              <li>Supervised and coordinated day-to-day operations on job sites.</li>
              <li>Evaluated team member performance and guided career advancement.</li>
              <li>Managed scheduling, coordination, and logistics of field operations.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="accordion">
        <button class="accordion-button">
          <span class="accordion-icon">+</span> Education
        </button>
        <div class="accordion-content">
          <h3>Bachelor of Science in Web Development</h3>
          <p>Bellevue University | Expected March 2025</p>
          <h3>Bachelor of Science in Audio Engineering</h3>
          <p>Full Sail University | 2021</p>
          <h3>Some College in Psychology</h3>
          <p>Missouri Baptist University | August 2013 - January 2014</p>
          <h3>High School Diploma</h3>
          <p>Marquette Senior High School, Chesterfield, MO | 2013</p>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="accordion">
        <button class="accordion-button">
          <span class="accordion-icon">+</span> Skills
        </button>
        <div class="accordion-content">
          <ul>
            <li>HTML, CSS, JavaScript, Angular w/ TypeScript</li>
            <li>Python, MongoDB, JSON</li>
            <li>Microsoft Office Suite (Excel, Word)</li>
            <li>Time Management, Customer Service</li>
            <li>Team Leadership and Mentorship</li>
          </ul>
        </div>
      </div>

      <!-- Download Button -->
      <div class="download-section">
        <a href="assets/resume.pdf" download="Malcolm_Abdullah_Resume.pdf">
          <button class="download-button">Download PDF Resume</button>
        </a>
      </div>
    </div>
  </div>
  `,
  styles: `
  .resume-container {
    font-family: Arial, sans-serif;
    background-color: #fff;
    color: #264769;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 2em;
    color: #264769;
  }

  .accordion-container {
    margin-top: 20px;
  }

  .accordion {
    border: 1px solid #264769;
    margin-bottom: 10px;
  }

  .accordion-button {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between title and icon */
  background-color: #264769;
  color: white;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

  .accordion-button:hover {
    background-color: #1a3d56;
  }

  .accordion-icon {
    font-size: 1.5em;
    transition: transform 0.3s ease;
  }

  .accordion-content {
    padding: 10px;
    background-color: #f4f4f4;
    display: none;
  }

  .accordion-content ul {
    list-style-type: ;
    padding: 15px;
  }

  .accordion-content ul li {
    margin: 5px 0;
  }

  .accordion.active .accordion-content {
    display: block;
  }

  .accordion.active .accordion-icon {
    transform: rotate(45deg);
  }

  .download-button {
    background-color: #264769;
    color: white;
    padding: 10px 20px;
    font-size: 1.2em;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
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

  .download-button:hover {
    background-color: #1a3d56;
  }
  `,
})
export class ResumeComponent {

  toggleAccordion(event: Event) {
    const button = event.target as HTMLButtonElement;
    const accordionContent = button.nextElementSibling as HTMLElement;

    button.classList.toggle('active');
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  }

  ngOnInit() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', this.toggleAccordion);
    });
  }
}

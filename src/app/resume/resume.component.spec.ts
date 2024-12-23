import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the download button', () => {
    const downloadButton = fixture.debugElement.query(By.css('.download-button'));
    expect(downloadButton).toBeTruthy();
    expect(downloadButton.nativeElement.textContent.trim()).toBe('Download PDF Resume');
  });

  it('should have a valid download link for the PDF', () => {
    const downloadAnchor = fixture.debugElement.query(By.css('.download-section a'));
    expect(downloadAnchor).toBeTruthy();
    expect(downloadAnchor.attributes['href']).toBe('/assets/resume.pdf');
    expect(downloadAnchor.attributes['download']).toBe('Malcolm_Abdullah_Resume.pdf');
  });

  it('should trigger a download when the button is clicked', () => {
    const downloadAnchor = fixture.debugElement.query(By.css('.download-section a'));
    spyOn(downloadAnchor.nativeElement, 'click');

    downloadAnchor.nativeElement.click();

    expect(downloadAnchor.nativeElement.click).toHaveBeenCalled();
  });

  it('should toggle accordion sections on click', () => {
    const accordionButtons = fixture.debugElement.queryAll(By.css('.accordion-button'));
    expect(accordionButtons.length).toBeGreaterThan(0);

    const firstButton = accordionButtons[0].nativeElement as HTMLElement;
    const firstContent = firstButton.nextElementSibling as HTMLElement;

    // Initially, the content should not be displayed
    expect(firstContent.style.display).toBe('none');

    // Simulate a click to expand
    firstButton.click();
    fixture.detectChanges();
    expect(firstContent.style.display).toBe('block');

    // Simulate a click to collapse
    firstButton.click();
    fixture.detectChanges();
    expect(firstContent.style.display).toBe('none');
  });
});

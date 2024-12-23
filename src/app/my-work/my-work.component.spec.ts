import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MyWorkComponent } from './my-work.component';

describe('MyWorkComponent', () => {
  let component: MyWorkComponent;
  let fixture: ComponentFixture<MyWorkComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(MyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly fetch a list of all my past work', () => {
    const mockWork = [
      { title: 'Work with Angular', description: 'Web-425: Angular w/ Typescript', link: 'web-425' }
    ];

    const req = httpTestingController.expectOne('http://localhost:3000/api/my-work');
    expect(req.request.method).toBe('GET');
    req.flush(mockWork);

    fixture.detectChanges();

    expect(component.myWork.length).toBe(1);
    expect(component.myWork[0].title).toBe('Work with Angular');
  });

  it('should update the myWork div when I add a new project', () => {
    const mockWork = [
      { title: 'Work with Angular', description: 'Web-425: Angular w/ Typescript', link: 'web-425' },
      { title: 'Enterprise JavaScript I', description: 'Web-231: Enterprise JavaScript I', link: 'web-231' }
    ];

    const req = httpTestingController.expectOne('http://localhost:3000/api/my-work');
    req.flush(mockWork);

    fixture.detectChanges();

    const projectCards = fixture.nativeElement.querySelectorAll('.work-card');
    expect(projectCards.length).toBe(2);
    expect(projectCards[0].textContent).toContain('Work with Angular');
    expect(projectCards[1].textContent).toContain('Enterprise JavaScript I');
  });

  it('should handle errors when data is not found', () => {
    const req = httpTestingController.expectOne(`http://localhost:3000/api/my-work`);
    req.flush('Message lost in translation.', { status: 404, statusText: 'Not Found' });

    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector('h2');
    expect(errorMessage.textContent).toContain('Lost in the cosmic dust...Check Back Later!');
  });

});

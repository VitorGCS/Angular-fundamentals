import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-project');
  });
/*
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h3')?.textContent).toContain('angular-project app is running!');
  });
*/
});

/*
Angular Testing Quick Start
  https://www.youtube.com/watch?v=Jv2uxzhPFl4&list=RDCMUCsBjURrPoezykLs9EqgamOA&index=2
  https://www.youtube.com/watch?v=BumgayeUC08
  https://www.youtube.com/watch?v=7WSMvufDh7s

 */

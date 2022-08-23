import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//Create a test suite ( test group )
describe('AppComponent', () => {
    
    beforeAll(
        async () => {
          await TestBed.configureTestingModule({
            imports: [
              RouterTestingModule
            ],
            declarations: [
              AppComponent
            ],
          }).compileComponents();
        }
    )

    //Create a unit test 
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
        });
    
    it(`should be loaded the feature - recipe`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.loadedFeature).toEqual('recipe');
        });
      
    /*
    it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h3')?.textContent).toContain('Please select a Recipe - First setp');
    });
    */
})
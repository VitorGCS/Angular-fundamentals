import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  //Setup a "TestBed" which is just a NG module specific for this testing environment
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents(); // compile the components HTML and CSS
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance; //test the component directly
    de = fixture.debugElement; //test it's rendered HTML

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2)
  });

  // testing the HTML template
  it('should have a H1 tag of `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText ).toBe('Alert Button');
  });

  //testing some functions
  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  //Async function
  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));


});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersComponent } from './servers.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersComponent ]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

// https://angular.io/guide/testing-components-basics

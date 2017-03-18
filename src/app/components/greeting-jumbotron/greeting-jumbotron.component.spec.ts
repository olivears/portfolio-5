import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingJumbotronComponent } from './greeting-jumbotron.component';

describe('GreetingJumbotronComponent', () => {
  let component: GreetingJumbotronComponent;
  let fixture: ComponentFixture<GreetingJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

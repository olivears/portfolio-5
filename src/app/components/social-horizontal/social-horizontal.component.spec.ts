import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHorizontalComponent } from './social-horizontal.component';

describe('SocialHorizontalComponent', () => {
  let component: SocialHorizontalComponent;
  let fixture: ComponentFixture<SocialHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

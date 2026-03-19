import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGreetings } from './social-greetings';

describe('SocialGreetings', () => {
  let component: SocialGreetings;
  let fixture: ComponentFixture<SocialGreetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialGreetings],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialGreetings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

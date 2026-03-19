import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhoWeAre } from './section-who-we-are';

describe('SectionWhoWeAre', () => {
  let component: SectionWhoWeAre;
  let fixture: ComponentFixture<SectionWhoWeAre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWhoWeAre],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWhoWeAre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

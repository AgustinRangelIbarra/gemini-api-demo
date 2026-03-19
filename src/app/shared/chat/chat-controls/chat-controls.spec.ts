import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatControls } from './chat-controls';

describe('ChatControls', () => {
  let component: ChatControls;
  let fixture: ComponentFixture<ChatControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatControls],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

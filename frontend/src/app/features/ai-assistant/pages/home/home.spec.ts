import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssistantHomeComponent } from './home';

describe('AiAssistantHomeComponent', () => {
  let component: AiAssistantHomeComponent;
  let fixture: ComponentFixture<AiAssistantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAssistantHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiAssistantHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

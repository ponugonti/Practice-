import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomePipe } from './custome-pipe';

describe('CustomePipe', () => {
  let component: CustomePipe;
  let fixture: ComponentFixture<CustomePipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomePipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

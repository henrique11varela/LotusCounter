import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgCardComponent } from './mtg-card.component';

describe('MtgCardComponent', () => {
  let component: MtgCardComponent;
  let fixture: ComponentFixture<MtgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

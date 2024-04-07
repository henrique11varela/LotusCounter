import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTestComponent } from './fetch-test.component';

describe('FetchTestComponent', () => {
  let component: FetchTestComponent;
  let fixture: ComponentFixture<FetchTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

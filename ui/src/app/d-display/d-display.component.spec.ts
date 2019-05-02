import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDisplayComponent } from './d-display.component';

describe('DDisplayComponent', () => {
  let component: DDisplayComponent;
  let fixture: ComponentFixture<DDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

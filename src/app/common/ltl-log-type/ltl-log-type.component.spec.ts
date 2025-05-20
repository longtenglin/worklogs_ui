import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtlLogTypeComponent } from './ltl-log-type.component';

describe('LtlLogTypeComponent', () => {
  let component: LtlLogTypeComponent;
  let fixture: ComponentFixture<LtlLogTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtlLogTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtlLogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

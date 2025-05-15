import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtlLeftNavigatorComponent } from './ltl-left-navigator.component';

describe('LtlLeftNavigatorComponent', () => {
  let component: LtlLeftNavigatorComponent;
  let fixture: ComponentFixture<LtlLeftNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtlLeftNavigatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtlLeftNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

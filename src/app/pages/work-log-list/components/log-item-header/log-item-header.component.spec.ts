import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemHeaderComponent } from './log-item-header.component';

describe('LogItemHeaderComponent', () => {
  let component: LogItemHeaderComponent;
  let fixture: ComponentFixture<LogItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogItemHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

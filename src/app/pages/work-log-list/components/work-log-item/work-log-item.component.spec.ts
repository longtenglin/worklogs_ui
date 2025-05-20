import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLogItemComponent } from './work-log-item.component';

describe('WorkLogItemComponent', () => {
  let component: WorkLogItemComponent;
  let fixture: ComponentFixture<WorkLogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkLogItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkLogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

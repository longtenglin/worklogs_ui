import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkLog } from './add-work-log';

describe('AddWorkLog', () => {
  let component: AddWorkLog;
  let fixture: ComponentFixture<AddWorkLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkLog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AddWorkLogComponent} from './add-work-log';



describe('AddWorkLog', () => {
  let component: AddWorkLogComponent;
  let fixture: ComponentFixture<AddWorkLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

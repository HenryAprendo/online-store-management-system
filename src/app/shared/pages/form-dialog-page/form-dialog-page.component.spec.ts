import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogPageComponent } from './form-dialog-page.component';

describe('FormDialogPageComponent', () => {
  let component: FormDialogPageComponent;
  let fixture: ComponentFixture<FormDialogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDialogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

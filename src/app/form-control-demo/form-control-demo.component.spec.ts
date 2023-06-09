import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlDemoComponent } from './form-control-demo.component';

describe('FormControlDemoComponent', () => {
  let component: FormControlDemoComponent;
  let fixture: ComponentFixture<FormControlDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

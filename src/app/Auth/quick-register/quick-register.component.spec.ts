import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRegisterComponent } from './quick-register.component';

describe('QuickRegisterComponent', () => {
  let component: QuickRegisterComponent;
  let fixture: ComponentFixture<QuickRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

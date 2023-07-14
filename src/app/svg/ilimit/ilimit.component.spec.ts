import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlimitComponent } from './ilimit.component';

describe('IlimitComponent', () => {
  let component: IlimitComponent;
  let fixture: ComponentFixture<IlimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrTableComponent } from './vr-table.component';

describe('VrTableComponent', () => {
  let component: VrTableComponent;
  let fixture: ComponentFixture<VrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

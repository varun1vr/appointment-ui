import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstablishmentModalComponent } from './add-establishment-modal.component';

describe('AddEstablishmentModalComponent', () => {
  let component: AddEstablishmentModalComponent;
  let fixture: ComponentFixture<AddEstablishmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstablishmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstablishmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

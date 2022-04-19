import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentBoardComponent } from './establishment-board.component';

describe('EstablishmentBoardComponent', () => {
  let component: EstablishmentBoardComponent;
  let fixture: ComponentFixture<EstablishmentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

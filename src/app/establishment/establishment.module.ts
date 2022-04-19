import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { EstablishmentBoardComponent } from './establishment-board/establishment-board.component';
import { SharedModule } from '../shared/shared.module';
import { AddEstablishmentModalComponent } from './add-establishment-modal/add-establishment-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EstablishmentBoardComponent,
    AddEstablishmentModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstablishmentRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ]
})
export class EstablishmentModule { }

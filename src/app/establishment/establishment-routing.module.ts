import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../core/route/route.service';
import { EstablishmentBoardComponent } from './establishment-board/establishment-board.component';

const routes: Routes = [
  Route.withShell([
    { path: 'establishment', component: EstablishmentBoardComponent },
    
  ]
  )
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }

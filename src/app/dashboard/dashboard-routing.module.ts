import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../core/route/route.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  Route.withShell([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'query/:id', component: QueryComponent },
    { path: 'query', component: QueryComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },
  ]
  )
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUpdatesComponent } from './view-updates/view-updates.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'view-updates', component:ViewUpdatesComponent},
  {path: 'table', component:TableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

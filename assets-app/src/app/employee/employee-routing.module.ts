import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';
import { AuthGuard } from '../security/auth.guard';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {
    path: 'employee', component: AppBaseComponent, canActivate: [AuthGuard], children:
      [
        {
          path: '', redirectTo: '/employee/list', pathMatch: 'full'
        },
        {
          path: 'form', component: EmployeeFormComponent
        },
        {
          path: 'list', component: EmployeeListComponent
        },
        {
          path: 'form/:employeeId', component: EmployeeFormComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

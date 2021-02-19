import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeFormComponent, 
    EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  exports: [
    EmployeeFormComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }

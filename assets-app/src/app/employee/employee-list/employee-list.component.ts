import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';
import { EmployeeInput } from '../employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeInput[] = [];
  employeeSelected: EmployeeInput;
  msgSuccess: String;
  msgError: String;

  constructor(
    private service: EmployeeService) {
  }

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(({ data }) => {
        this.employees = data.findAllEmployees;
      });
  }

  prepareDelete(employee: EmployeeInput) {
    this.employeeSelected = employee;
  }

  deleteEmployee() {
    this.service.delete(this.employeeSelected.id)
      .subscribe(data => {
        this.msgSuccess = 'Record deleted successfully';
        this.employees = this.employees.filter(item => item !== this.employeeSelected);
      },
      error => this.msgError = 'An error occurred while deleting the record'
      )

  }

}

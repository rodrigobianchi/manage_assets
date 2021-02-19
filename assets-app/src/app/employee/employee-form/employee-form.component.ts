import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/employee.service';
import { EmployeeInput } from '../employee';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {

  employee: EmployeeInput;
  showMsgSuccess: boolean = false;
  errors: String[];
  employeeId: String;

  constructor(
    private service: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.employee = new EmployeeInput();;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.employeeId = (params['employeeId']);
      if (this.employeeId) {
        this.service.findById(this.employeeId)
        .subscribe(({ data }) => {
          this.employee.id = data.findEmployeeById.id;
          this.employee.name = data.findEmployeeById.name;
          this.employee.email = data.findEmployeeById.email;
          this.employee.enrollment = data.findEmployeeById.enrollment;
          this.employee.gender = data.findEmployeeById.gender;
        });
      }
    });
  }

  onSubmit() {
    if (this.employeeId) {
      this.service.update(this.employee)
        .subscribe(data => {
          this.showMsgSuccess = true;
          this.errors = [];
        }
          , error => {
            this.showMsgSuccess = false;
            this.errors = [error];
          })

    } else {

      this.service.save(this.employee)
        .subscribe(data => {
          this.showMsgSuccess = true;
          this.errors = [];
        }
          , error => {
            this.showMsgSuccess = false;
            this.errors = [error];
          })
    }
  }

  returnSearch() {
    this.router.navigate(['/employee'])
  }

}

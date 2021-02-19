import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';
import { EmployeeInput } from 'src/app/employee/employee';
import { ServicoPrestadoService } from 'src/app/servico-prestado/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html'
})
export class ServicoPrestadoFormComponent implements OnInit {

  showMsgSuccess: boolean = false;
  errors: String[];
  employees: EmployeeInput[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(
    private employeeService: EmployeeService,
    private service: ServicoPrestadoService) {
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(
      response => this.employees = response
    );
  }

  onSubmit() {
    this.service.save(this.servicoPrestado)
      .subscribe(response => {
        this.showMsgSuccess = true;
        this.errors = [];
        this.servicoPrestado = response;
      }
        , errorResponse => {
          this.showMsgSuccess = false;
          this.errors = errorResponse.error.errors;
        })
  }

}

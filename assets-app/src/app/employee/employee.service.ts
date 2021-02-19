import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInput } from './employee';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import { SAVE_EMPLOYEE, FIND_ALL_EMPLOYEES, DELETE_EMPLOYEE, FIND_EMPLOYEE_BY_ID } from '../graphql/employee/graphql';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,
    private apollo: Apollo) {
  }

  save(employee: EmployeeInput): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: SAVE_EMPLOYEE,
      variables: {
        employee: employee
      }
    });
  }

  update(employee: EmployeeInput): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: SAVE_EMPLOYEE,
      variables: {
        employee: employee
      }
    });
  }

  findAll(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FIND_ALL_EMPLOYEES,
      variables: {
        orderBy: "name"
      }
    })
    .valueChanges
  }

  findById(employeeId: String): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FIND_EMPLOYEE_BY_ID,
      variables: {
        employeeId: employeeId
      }
    })
    .valueChanges
  }

  delete(employeeId: String): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: DELETE_EMPLOYEE,
      variables: {
        employeeId: employeeId
      }
    })
  }

}

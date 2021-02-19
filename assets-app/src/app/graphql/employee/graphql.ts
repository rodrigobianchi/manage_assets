import gql from "graphql-tag";

export const SAVE_EMPLOYEE = gql`
  mutation ($employee: EmployeeInput) {
    saveEmployee(employeeInput: $employee) {
      id
      name
      email
      enrollment
      gender
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation ($employeeId: String) {
    deleteEmployee(employeeId: $employeeId)
  }
`;

export const FIND_ALL_EMPLOYEES = gql`
  query ($orderBy : String) {
    findAllEmployees(orderBy: $orderBy) {
      id
      name
      email
      enrollment
      gender
    }
  }
`;

export const FIND_EMPLOYEE_BY_ID = gql`
  query ($employeeId : String) {
    findEmployeeById(employeeId: $employeeId) {
      id
      name
      email
      enrollment
      gender
    }
  }
`;
package br.com.monitora.service;

import br.com.monitora.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee findById(String employeeId);

    Employee save(Employee employee);

    List<Employee> findAll(String orderBy);

    Boolean delete(String employeeId);
}

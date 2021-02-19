package br.com.monitora.resolver.query;

import br.com.monitora.model.Employee;
import br.com.monitora.service.EmployeeService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployeeQueryResolver implements GraphQLQueryResolver {

    @Autowired
    private EmployeeService service;

    @PreAuthorize("isAuthenticated()")
    public Employee findEmployeeById(String employeeId) {
        return service.findById(employeeId);
    }

    @PreAuthorize("isAuthenticated()")
    public List<Employee> findAllEmployees(String orderBy) {
        return service.findAll(orderBy);
    }
}

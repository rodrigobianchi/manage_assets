package br.com.monitora.resolver.mutation;

import br.com.monitora.input.EmployeeInput;
import br.com.monitora.model.Employee;
import br.com.monitora.service.EmployeeService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMutationResolver implements GraphQLMutationResolver {

    @Autowired
    private EmployeeService service;

    @PreAuthorize("isAuthenticated()")
    public Employee saveEmployee(EmployeeInput employeeInput) {
        Employee employee = builderEmployee(employeeInput);
        return service.save(employee);
    }

    private Employee builderEmployee(EmployeeInput employeeInput) {
        Employee employee = Employee.builder()
                .name(employeeInput.getName())
                .email(employeeInput.getEmail())
                .enrollment(employeeInput.getEnrollment())
                .gender(employeeInput.getGender()).build();
        if (employeeInput.getId() != null) {
            employee.setId(new ObjectId(employeeInput.getId()));
        }
        return employee;
    }

    @PreAuthorize("isAuthenticated()")
    public Boolean deleteEmployee(String employeeId) {
        return service.delete(employeeId);
    }

}

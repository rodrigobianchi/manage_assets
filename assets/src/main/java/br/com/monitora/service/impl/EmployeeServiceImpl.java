package br.com.monitora.service.impl;

import br.com.monitora.exception.EntityAlreadyExistsException;
import br.com.monitora.exception.EntityNotFoundException;
import br.com.monitora.model.Employee;
import br.com.monitora.repository.EmployeeRepository;
import br.com.monitora.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public Employee findById(String employeeId) {
        return repository.findById(employeeId).orElseThrow(() ->
                new EntityNotFoundException("Employee not found"));
    }

    @Override
    public Employee save(Employee employee) {
        if (repository.existsByEnrollment(employee.getEnrollment())) {
            throw new EntityAlreadyExistsException("Employee already registered");
        }
        return repository.save(employee);
    }

    @Override
    public List<Employee> findAll(String orderBy) {
        return repository.findAll(Sort.by(Sort.Direction.ASC, orderBy));
    }

    @Override
    public Boolean delete(String employeeId) {
        try {
            repository.deleteById(employeeId);
            return Boolean.TRUE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }

}

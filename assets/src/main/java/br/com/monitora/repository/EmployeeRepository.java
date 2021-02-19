package br.com.monitora.repository;

import br.com.monitora.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

    boolean existsByEnrollment(String enrollment);

}

package br.com.monitora.resolver.mutation;

import br.com.monitora.input.UserInput;
import br.com.monitora.model.User;
import br.com.monitora.service.EmployeeService;
import br.com.monitora.service.impl.UserServiceImpl;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Component
public class UserMutationResolver implements GraphQLMutationResolver {

    @Autowired
    private UserServiceImpl service;

    @PermitAll
    public User saveUser(UserInput userInput) {
        User user = User.builder()
                .username(userInput.getUsername())
                .password(userInput.getPassword()).build();
        return service.save(user);
    }
}

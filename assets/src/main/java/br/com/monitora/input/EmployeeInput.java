package br.com.monitora.input;

import br.com.monitora.model.Gender;
import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeInput implements GraphQLInputType {

    @Override
    public String getName() {
        return name;
    }

    private String id;

    private String name;

    private String email;

    private String enrollment;

    private Gender gender;

}

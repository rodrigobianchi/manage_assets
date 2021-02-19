package br.com.monitora.input;

import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInput implements GraphQLInputType {

    @Override
    public String getName() {
        return username;
    }

    private String username;

    private String password;

}

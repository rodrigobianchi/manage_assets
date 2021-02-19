package br.com.monitora.input;

import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoanInput implements GraphQLInputType {

    @Override
    public String getName() {
        return employeeId;
    }

    private String loanDate;

    private String employeeId;

    private String[] assetIds;

}

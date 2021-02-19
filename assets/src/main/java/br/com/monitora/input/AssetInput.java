package br.com.monitora.input;

import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class AssetInput implements GraphQLInputType {

    @Override
    public String getName() {
        return name;
    }

    private String id;

    private String name;

    private String serialNumber;

    private String maker;

    private BigDecimal estimatedValue;

}

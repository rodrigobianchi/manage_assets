package br.com.monitora.exception;

import com.fasterxml.jackson.annotation.JsonIgnore;
import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

import java.util.List;

public class EntityAlreadyExistsException extends RuntimeException implements GraphQLError {

    private String field;

    public EntityAlreadyExistsException(String message) {
        super(message);
    }

    public EntityAlreadyExistsException(String message, String field) {
        super(message);
        this.field = field;
    }

    @Override
    public List<SourceLocation> getLocations() {
        return null;
    }

    @Override
    @JsonIgnore
    public StackTraceElement[] getStackTrace() {
        return super.getStackTrace();
    }

    @Override
    public ErrorType getErrorType() {
        return ErrorType.ValidationError;
    }
}

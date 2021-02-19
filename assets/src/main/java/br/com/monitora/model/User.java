package br.com.monitora.model;

import lombok.Builder;
import lombok.Data;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Builder
public class User {

    @Id
    private ObjectId id;

    @BsonProperty
    private String username;

    @BsonProperty
    private String password;
}

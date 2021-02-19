package br.com.monitora.model;

import lombok.Builder;
import lombok.Data;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Data
@Document
@Builder
public class Loan {

    @Id
    private ObjectId id;

    @BsonProperty
    private LocalDate loanDate;

    @DBRef
    private Employee employee;

    @DBRef
    private List<Asset> assets;
}

package br.com.monitora.model;

import lombok.Builder;
import lombok.Data;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Data
@Document
@Builder
public class Asset {

    @Id
    private ObjectId id;

    @BsonProperty
    private String name;

    @BsonProperty
    private String serialNumber;

    @BsonProperty
    private String maker;

    @BsonProperty
    private BigDecimal estimatedValue;

}

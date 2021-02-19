package br.com.monitora.repository;

import br.com.monitora.model.Asset;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssetRepository extends MongoRepository<Asset, String> {

    boolean existsBySerialNumber(String serialNumber);
}

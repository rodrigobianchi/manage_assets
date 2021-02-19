package br.com.monitora.service;

import br.com.monitora.model.Asset;

import java.util.List;

public interface AssetService {

    Asset save(Asset asset);

    Asset findById(String assetId);

    List<Asset> findAll(String orderBy);

    Boolean delete(String assetId);
}

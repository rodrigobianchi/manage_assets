package br.com.monitora.service.impl;

import br.com.monitora.exception.EntityAlreadyExistsException;
import br.com.monitora.exception.EntityNotFoundException;
import br.com.monitora.model.Asset;
import br.com.monitora.repository.AssetRepository;
import br.com.monitora.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetServiceImpl implements AssetService {

    @Autowired
    private AssetRepository repository;

    @Override
    public Asset save(Asset asset) {
        if (repository.existsBySerialNumber(asset.getSerialNumber())) {
            throw new EntityAlreadyExistsException("Asset already registered");
        }
        return repository.save(asset);
    }

    @Override
    public Asset findById(String assetId) {
        return repository.findById(assetId).orElseThrow(() ->
                new EntityNotFoundException("Asset not found"));
    }

    @Override
    public List<Asset> findAll(String orderBy) {
        return repository.findAll(Sort.by(Sort.Direction.ASC, orderBy));
    }

    @Override
    public Boolean delete(String assetId) {
        try {
            repository.deleteById(assetId);
            return Boolean.TRUE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }
}

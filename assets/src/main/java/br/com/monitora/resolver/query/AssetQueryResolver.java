package br.com.monitora.resolver.query;

import br.com.monitora.model.Asset;
import br.com.monitora.model.Employee;
import br.com.monitora.service.AssetService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AssetQueryResolver implements GraphQLQueryResolver {

    @Autowired
    private AssetService service;

    @PreAuthorize("isAuthenticated()")
    public Asset findAssetById(String assetId) {
        return service.findById(assetId);
    }

    @PreAuthorize("isAuthenticated()")
    public List<Asset> findAllAssets(String orderBy) {
        return service.findAll(orderBy);
    }
}

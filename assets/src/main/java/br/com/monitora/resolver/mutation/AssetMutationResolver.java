package br.com.monitora.resolver.mutation;

import br.com.monitora.input.AssetInput;
import br.com.monitora.model.Asset;
import br.com.monitora.service.AssetService;
import br.com.monitora.service.EmployeeService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

@Component
public class AssetMutationResolver implements GraphQLMutationResolver {

    @Autowired
    private AssetService service;

    @Autowired
    private EmployeeService employeeService;

    @PreAuthorize("isAuthenticated()")
    public Asset saveAsset(AssetInput assetInput) {
        Asset asset = builderAsset(assetInput);
        return service.save(asset);
    }

    private Asset builderAsset(AssetInput assetInput) {
        Asset asset = Asset.builder()
                .name(assetInput.getName())
                .serialNumber(assetInput.getSerialNumber())
                .maker(assetInput.getMaker())
                .estimatedValue(assetInput.getEstimatedValue()).build();
        if (assetInput.getId() != null) {
            asset.setId(new ObjectId(assetInput.getId()));
        }
        return asset;
    }

    @PreAuthorize("isAuthenticated()")
    public Boolean deleteAsset(String assetId) {
        return service.delete(assetId);
    }
}

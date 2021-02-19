package br.com.monitora.resolver.mutation;

import br.com.monitora.input.LoanInput;
import br.com.monitora.model.Asset;
import br.com.monitora.model.Employee;
import br.com.monitora.model.Loan;
import br.com.monitora.service.AssetService;
import br.com.monitora.service.EmployeeService;
import br.com.monitora.service.LoanService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class LoanMutationResolver implements GraphQLMutationResolver {

    @Autowired
    private LoanService service;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private AssetService assetService;

    @PreAuthorize("hasAuthority('USER')")
    public Loan saveLoan(LoanInput loanInput) {
        Employee employee = employeeService.findById(loanInput.getEmployeeId());
        List<String> assetIds = Arrays.asList(loanInput.getAssetIds());

        List<Asset> assets = assetIds.stream().map(assetId ->
                assetService.findById(assetId)).collect(Collectors.toList());

        LocalDate loanDate = LocalDate.parse(loanInput.getLoanDate());

        Loan loan = Loan.builder().loanDate(loanDate).employee(employee).assets(assets).build();
        return service.save(loan);
    }
}

package br.com.monitora.service.impl;

import br.com.monitora.model.Loan;
import br.com.monitora.repository.LoanRepository;
import br.com.monitora.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanServiceImpl implements LoanService {

    @Autowired
    private LoanRepository repository;

    @Override
    public Loan save(Loan loan) {
        return repository.save(loan);
    }
}

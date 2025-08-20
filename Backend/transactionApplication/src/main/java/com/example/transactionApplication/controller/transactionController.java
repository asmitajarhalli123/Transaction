package com.example.transactionApplication.controller;

import com.example.transactionApplication.TransactionApplication;
import com.example.transactionApplication.model.transaction;
import com.example.transactionApplication.repository.transactionRepo;
import jakarta.transaction.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class transactionController {
    @Autowired
    private transactionRepo transactionrepo;

    @GetMapping("/transaction")
    public List<transaction> getAllTransaction(){
        return transactionrepo.findAll();
    }

    @PostMapping("/transaction")
    public transaction createTransaction(@RequestBody transaction Transaction){
        return transactionrepo.save(Transaction);
    }

    @GetMapping("/transaction/{id}")
    public ResponseEntity<transaction> getTransactionById (@PathVariable Long id){
        return transactionrepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(new ResponseEntity<>(org.springframework.http.HttpStatus.NOT_FOUND));
    }

    @PutMapping("/transaction/{id}")
    public ResponseEntity<transaction> updateTransaction(@PathVariable long id , @RequestBody transaction TransactionD){
         transaction  Transaction= transactionrepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)).getBody();

         Transaction.setFirstName(TransactionD.getFirstName());
         Transaction.setLastName(TransactionD.getLastName());
         Transaction.setAmount(TransactionD.getAmount());
         Transaction.setType(TransactionD.getType());
         Transaction.setUserId(TransactionD.getUserId());

         transaction updateTransaction = transactionrepo.save(Transaction);
         return ResponseEntity.ok(updateTransaction);
    }
}



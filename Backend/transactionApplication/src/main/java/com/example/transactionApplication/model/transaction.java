package com.example.transactionApplication.model;
import jakarta.persistence.*;

@Entity
@Table(name = "transaction")
public class transaction {

    public transaction(){}

    public transaction(Long id, Long userId, TransactionType type, Double amount , String firstName , String lastName) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.amount = amount;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName ;
    private String lastName;

    // who made the transaction
    private Long userId;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Long getUserId() {
        return userId;
    }

    public TransactionType getType() {
        return type;
    }

    public Double getAmount() {
        return amount;
    }

    // type of transaction (CREDIT, DEBIT, TRANSFER, REFUND, etc.)
    @Enumerated(EnumType.STRING)
    private TransactionType type;

    // amount of money
    private Double amount;
}

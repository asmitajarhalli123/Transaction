package com.example.transactionApplication.repository;

import com.example.transactionApplication.model.transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@Repository
public interface transactionRepo extends JpaRepository<transaction, Long> {

}

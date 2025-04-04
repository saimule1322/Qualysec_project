package com.example.demo.repositories;

import com.example.demo.models.ContactForm;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactFormRepository extends MongoRepository<ContactForm, String> {
}


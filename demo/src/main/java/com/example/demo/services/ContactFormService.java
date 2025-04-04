package com.example.demo.services;

import com.example.demo.models.ContactForm;
import com.example.demo.repositories.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactFormService {
    @Autowired
    private ContactFormRepository contactFormRepository;

    public ContactForm saveForm(ContactForm form) {
        return contactFormRepository.save(form);
    }
}

package com.example.demo.controllers;

import com.example.demo.models.ContactForm;
import com.example.demo.services.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
public class ContactFormController {
    @Autowired
    private ContactFormService contactFormService;

    @PostMapping
    public ContactForm submitForm(@RequestBody ContactForm form) {
        return contactFormService.saveForm(form);
    }
}

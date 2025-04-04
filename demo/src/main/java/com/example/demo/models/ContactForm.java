package com.example.demo.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "contact") // MongoDB collection name
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactForm {
    @Id
    private String id;
    private String fullName;
    private String workEmail;
    private String phoneNumber;
    private List<String> services;
    private String message;
}

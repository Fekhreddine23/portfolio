package com.portfolio.backend.controller;

import com.portfolio.backend.model.ResumeData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final com.portfolio.backend.service.PortfolioService portfolioService;

    public PortfolioController(com.portfolio.backend.service.PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/resume")
    public ResumeData getResume() {
        return portfolioService.getResumeData();
    }

    @PostMapping("/contact")
    public com.portfolio.backend.entity.ContactMessage sendMessage(@jakarta.validation.Valid @RequestBody com.portfolio.backend.entity.ContactMessage message) {
        return portfolioService.saveMessage(message);
    }
}

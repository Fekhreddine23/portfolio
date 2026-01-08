package com.portfolio.backend.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "experience")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private String duration;

    @ElementCollection
    private List<String> responsibilities;

    @ElementCollection
    private List<String> responsibilitiesFr;

    public Experience() {}

    public Experience(String company, String role, String duration, List<String> responsibilities, List<String> responsibilitiesFr) {
        this.company = company;
        this.role = role;
        this.duration = duration;
        this.responsibilities = responsibilities;
        this.responsibilitiesFr = responsibilitiesFr;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public List<String> getResponsibilities() { return responsibilities; }
    public void setResponsibilities(List<String> responsibilities) { this.responsibilities = responsibilities; }

    public List<String> getResponsibilitiesFr() { return responsibilitiesFr; }
    public void setResponsibilitiesFr(List<String> responsibilitiesFr) { this.responsibilitiesFr = responsibilitiesFr; }
}

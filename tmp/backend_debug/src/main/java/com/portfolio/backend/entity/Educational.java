package com.portfolio.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "educational")
public class Educational {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String degree;
    private String institution;
    private String graduationYear;

    public Educational() {}

    public Educational(String degree, String institution, String graduationYear) {
        this.degree = degree;
        this.institution = institution;
        this.graduationYear = graduationYear;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getGraduationYear() { return graduationYear; }
    public void setGraduationYear(String graduationYear) { this.graduationYear = graduationYear; }
}

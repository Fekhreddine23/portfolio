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
    private String type; // "DEGREE" or "CERTIFICATION"
    private String url;

    public Educational() {}

    public Educational(String degree, String institution, String graduationYear, String type, String url) {
        this.degree = degree;
        this.institution = institution;
        this.graduationYear = graduationYear;
        this.type = type;
        this.url = url;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getGraduationYear() { return graduationYear; }
    public void setGraduationYear(String graduationYear) { this.graduationYear = graduationYear; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
}

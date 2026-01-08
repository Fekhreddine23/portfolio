package com.portfolio.backend.model;

import java.util.List;

public class ResumeData {
    private String name;
    private String title;
    private String summary;
    private List<Experience> experience;
    private List<Education> education;
    private java.util.Map<String, List<String>> skills;

    public ResumeData() {}

    public ResumeData(String name, String title, String summary, List<Experience> experience, List<Education> education, java.util.Map<String, List<String>> skills) {
        this.name = name;
        this.title = title;
        this.summary = summary;
        this.experience = experience;
        this.education = education;
        this.skills = skills;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public List<Experience> getExperience() { return experience; }
    public void setExperience(List<Experience> experience) { this.experience = experience; }

    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }

    public java.util.Map<String, List<String>> getSkills() { return skills; }
    public void setSkills(java.util.Map<String, List<String>> skills) { this.skills = skills; }

    public static class Experience {
        private String company;
        private String role;
        private String duration;
        private List<String> responsibilities;
        private List<String> responsibilitiesFr;

        public Experience() {}

        public Experience(String company, String role, String duration, List<String> responsibilities, List<String> responsibilitiesFr) {
            this.company = company;
            this.role = role;
            this.duration = duration;
            this.responsibilities = responsibilities;
            this.responsibilitiesFr = responsibilitiesFr;
        }

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

    public static class Education {
        private String degree;
        private String institution;
        private String graduationYear;
        private String type;
        private String url;

        public Education() {}

        public Education(String degree, String institution, String graduationYear, String type, String url) {
            this.degree = degree;
            this.institution = institution;
            this.graduationYear = graduationYear;
            this.type = type;
            this.url = url;
        }

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
}

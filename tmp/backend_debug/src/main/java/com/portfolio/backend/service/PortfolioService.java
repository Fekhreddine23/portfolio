package com.portfolio.backend.service;

import com.portfolio.backend.model.ResumeData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    private final com.portfolio.backend.repository.ExperienceRepository experienceRepository;
    private final com.portfolio.backend.repository.EducationRepository educationRepository;
    private final com.portfolio.backend.repository.SkillRepository skillRepository;
    private final com.portfolio.backend.repository.ContactMessageRepository contactMessageRepository;

    public PortfolioService(com.portfolio.backend.repository.ExperienceRepository experienceRepository,
                            com.portfolio.backend.repository.EducationRepository educationRepository,
                            com.portfolio.backend.repository.SkillRepository skillRepository,
                            com.portfolio.backend.repository.ContactMessageRepository contactMessageRepository) {
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.skillRepository = skillRepository;
        this.contactMessageRepository = contactMessageRepository;
    }

    public com.portfolio.backend.entity.ContactMessage saveMessage(com.portfolio.backend.entity.ContactMessage message) {
        message.setTimestamp(java.time.LocalDateTime.now());
        return contactMessageRepository.save(message);
    }

    public ResumeData getResumeData() {
        ResumeData resume = new ResumeData();
        resume.setName("Fekhreddine ARRAG");
        resume.setTitle("Fullstack Developer Java Angular");
        resume.setSummary("Passionate Fullstack Developer with experience in building robust web applications.");

        // Map Experience Entity to DTO
        List<ResumeData.Experience> experienceDTOs = experienceRepository.findAll().stream()
                .map(exp -> new ResumeData.Experience(exp.getCompany(), exp.getRole(), exp.getDuration(), exp.getResponsibilities(), exp.getResponsibilitiesFr()))
                .collect(Collectors.toList());
        resume.setExperience(experienceDTOs);

        // Map Educational Entity to DTO
        List<ResumeData.Education> educationDTOs = educationRepository.findAll().stream()
                .map(edu -> new ResumeData.Education(edu.getDegree(), edu.getInstitution(), edu.getGraduationYear()))
                .collect(Collectors.toList());
        resume.setEducation(educationDTOs);

        // Map Skill Entity to DTO string list
        List<String> skillDTOs = skillRepository.findAll().stream()
                .map(com.portfolio.backend.entity.Skill::getName)
                .collect(Collectors.toList());
        resume.setSkills(skillDTOs);

        return resume;
    }
}

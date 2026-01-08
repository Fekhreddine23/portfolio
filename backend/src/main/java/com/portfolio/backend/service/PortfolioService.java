package com.portfolio.backend.service;

import com.portfolio.backend.entity.ContactMessage;
import com.portfolio.backend.model.ResumeData;
import com.portfolio.backend.repository.ContactMessageRepository;
import com.portfolio.backend.repository.EducationRepository;
import com.portfolio.backend.repository.ExperienceRepository;
import com.portfolio.backend.repository.SkillRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ContactMessageRepository contactMessageRepository;
    private final EmailService emailService;

    public PortfolioService(ExperienceRepository experienceRepository,
                            EducationRepository educationRepository,
                            SkillRepository skillRepository,
                            ContactMessageRepository contactMessageRepository,
                            EmailService emailService) {
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.skillRepository = skillRepository;
        this.contactMessageRepository = contactMessageRepository;
        this.emailService = emailService;
    }

    public ContactMessage saveMessage(ContactMessage message) {
        // XSS Protection: Sanitize inputs before saving or sending
        message.setName(Jsoup.clean(message.getName(), Safelist.none()));
        message.setSubject(Jsoup.clean(message.getSubject(), Safelist.none()));
        message.setMessage(Jsoup.clean(message.getMessage(), Safelist.none()));
        
        message.setTimestamp(java.time.LocalDateTime.now());
        ContactMessage saved = contactMessageRepository.save(message);

        // Send notification email
        String emailBody = "New Contact Message:\n\n" +
                "Name: " + message.getName() + "\n" +
                "Email: " + message.getEmail() + "\n" +
                "Subject: " + message.getSubject() + "\n" +
                "Message:\n" + message.getMessage();

        try {
            emailService.sendSimpleMessage("fekhredine1990@gmail.com", "Portfolio Contact: " + message.getSubject(), emailBody);
        } catch (Exception e) {
            // Log error but don't fail the request
            System.err.println("Failed to send email: " + e.getMessage());
        }

        return saved;
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
                .map(edu -> new ResumeData.Education(edu.getDegree(), edu.getInstitution(), edu.getGraduationYear(), edu.getType(), edu.getUrl()))
                .collect(Collectors.toList());
        resume.setEducation(educationDTOs);

        // Map Skill Entity to DTO Map<Category, List<String>>
        java.util.Map<String, List<String>> skillMap = skillRepository.findAll().stream()
                .collect(Collectors.groupingBy(
                        com.portfolio.backend.entity.Skill::getCategory,
                        Collectors.mapping(com.portfolio.backend.entity.Skill::getName, Collectors.toList())
                ));
        resume.setSkills(skillMap);

        return resume;
    }
}

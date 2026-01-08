package com.portfolio.backend.config;

import com.portfolio.backend.entity.Educational;
import com.portfolio.backend.entity.Experience;
import com.portfolio.backend.entity.Skill;
import com.portfolio.backend.repository.EducationRepository;
import com.portfolio.backend.repository.ExperienceRepository;
import com.portfolio.backend.repository.SkillRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    @Bean
    public CommandLineRunner initData(ExperienceRepository experienceRepository,
                                      EducationRepository educationRepository,
                                      SkillRepository skillRepository) {
        return args -> {
            if (experienceRepository.count() == 0) {
                experienceRepository.saveAll(Arrays.asList(
                        // Sept RD Services
                        new Experience("Sept RD Services", "Fullstack Developer", "2022 - April 2024",
                                Arrays.asList(
                                        "Contributed to the development of new features for JFIV software aimed at healthcare professionals.",
                                        "Simplified administrative tasks related to cryopreservatives through an intuitive and ergonomic interface.",
                                        "Implemented a robust and secure architecture to manage rights and permissions within JFIV, ensuring sensitive data protection and compliance.",
                                        "Developed and integrated health connectors (HL7) to ensure compatibility between JFIV and existing patient management systems.",
                                        "Designed and developed APIs enabling fluid communication between different health systems, optimizing interoperability.",
                                        "Ensured continuous performance of GAM connectors and compatibility with existing systems.",
                                        "Designed and developed intuitive and ergonomic user interfaces dedicated to gynecologists in JFIV."
                                ),
                                Arrays.asList(
                                        "Contribution au développement de nouvelles fonctionnalités sur le logiciel JFIV destiné aux professionnels de santé.",
                                        "Simplification des tâches administratives liées aux cryoconservants grâce à une interface intuitive et ergonomique.",
                                        "Mise en place d’une architecture robuste et sécurisée pour gérer les droits et permissions au sein de JFIV, garantissant la conformité.",
                                        "Développement et intégration de connecteurs de santé (HL7) pour assurer la compatibilité entre JFIV et les systèmes existants.",
                                        "Conception et développement d’API permettant une communication fluide entre les différents systèmes de santé.",
                                        "Assurance de la performance continue des connecteurs GAM et de leur compatibilité.",
                                        "Conception et développement d’interfaces utilisateur intuitives et ergonomiques dédiées aux gynécologues dans JFIV."
                                )),
                        // GenAI Cloud Project
                        new Experience("GenAI Cloud Project Bootcamp", "AI App Developer", "Feb 2025 - May 2025",
                                Arrays.asList(
                                        "Designed and developed a Japanese Kanji learning app with Flask backend and Streamlit frontend.",
                                        "Integrated MangaOCR for handwritten text recognition to identify Japanese characters.",
                                        "Managed practice sessions: Tracked user progress for a personalized experience.",
                                        "Connected frontend and backend services via RESTful APIs for fluid communication."
                                ),
                                Arrays.asList(
                                        "Conception et développement d'une application d'apprentissage du kanji japonais avec Flask et Streamlit.",
                                        "Intégration de MangaOCR : Reconnaissance de texte manuscrit pour les caractères japonais.",
                                        "Gestion des sessions de pratique : Suivi de la progression des utilisateurs.",
                                        "Connexion des services frontend et backend via des API RESTful."
                                )),
                        // UFC Que Choisir
                        new Experience("UFC Que Choisir", "Fullstack Developer", "Dec 2019 - Feb 2020",
                                Arrays.asList(
                                        "Elaborated detailed specifications for website redesign to improve UX and performance.",
                                        "Conducted in-depth audit of existing site: Identified weak points and improvement opportunities.",
                                        "Designed interface mockups: Created modern UX/UI designs focusing on simplicity and accessibility.",
                                        "Implemented an intuitive UI, reducing friction points and increasing conversion rate by 15%.",
                                        "Collaborated closely with internal teams to ensure project compliance with security and performance standards."
                                ),
                                Arrays.asList(
                                        "Élaboration d'un cahier des charges détaillé pour la refonte du site web.",
                                        "Audit approfondi du site existant : Identification des points faibles et améliorations.",
                                        "Conception de maquettes d’interfaces : Designs UX/UI modernes, simples et accessibles.",
                                        "Mise en oeuvre d’une interface utilisateur intuitive, augmentant le taux de conversion de 15%.",
                                        "Collaboration étroite avec les équipes internes pour assurer la conformité du projet."
                                ))
                ));
            }

            if (educationRepository.count() == 0) {
                educationRepository.saveAll(Arrays.asList(
                        new Educational("Concepteur développeur d’application fullstack", "Bac+4", "2022"),
                        new Educational("Développeur web et mobile", "Bac+2", "2022"),
                        new Educational("Python for Data Science", "IBM Skills Network", "2025"),
                        new Educational("Generative AI in Action", "IBM Skills Network", "2025")
                ));
            }

            if (skillRepository.count() == 0) {
                skillRepository.saveAll(Arrays.asList(
                        new Skill("Java 17"), new Skill("Spring Boot"), new Skill("Flask"),
                        new Skill("Angular 14"), new Skill("TypeScript"), new Skill("JavaScript"), new Skill("Bootstrap"),
                        new Skill("RESTful APIs"), new Skill("JUnit"), new Skill("Cypress"),
                        new Skill("GitHub Actions"), new Skill("MySQL"), new Skill("H2"),
                        new Skill("Ubuntu / WSL"), new Skill("Postman")
                ));
            }
        };
    }
}

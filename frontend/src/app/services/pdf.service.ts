import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { TranslationService } from './translation.service';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor(private translationService: TranslationService) { }

    generateResume() {
        const doc = new jsPDF();
        const lang = this.translationService.currentLang();
        const t = this.translationService.get(''); // Get all translations for current lang

        // Colors
        const primaryColor = '#a855f7';
        const textColor = '#333333';
        const secondaryColor = '#666666';

        // Header
        doc.setFontSize(24);
        doc.setTextColor(primaryColor);
        doc.text('Fekhreddine ARRAG', 20, 20);

        doc.setFontSize(14);
        doc.setTextColor(textColor);
        doc.text(t.hero.title, 20, 30);

        doc.setFontSize(10);
        doc.setTextColor(secondaryColor);
        doc.text('Fullstack Developer | Java & Angular', 20, 36);
        doc.text('Email: fekhredine1990@gmail.com | GitHub: github.com/Fekhreddine23', 20, 42);

        // Line separator
        doc.setDrawColor(200, 200, 200);
        doc.line(20, 48, 190, 48);

        let yPos = 60;

        // Summary
        doc.setFontSize(16);
        doc.setTextColor(primaryColor);
        doc.text(t.about.title, 20, yPos);
        yPos += 10;
        doc.setFontSize(10);
        doc.setTextColor(textColor);
        const summary = doc.splitTextToSize(t.about.p1 + ' ' + t.about.p2, 170);
        doc.text(summary, 20, yPos);
        yPos += summary.length * 5 + 10;

        // Experience
        doc.setFontSize(16);
        doc.setTextColor(primaryColor);
        doc.text(t.experience.title, 20, yPos);
        yPos += 10;

        const jobs = ['sept', 'ufc', 'genai'];
        jobs.forEach(jobKey => {
            const job = t.experience[jobKey];
            doc.setFontSize(12);
            doc.setTextColor(textColor);
            doc.setFont('helvetica', 'bold');
            doc.text(job.role, 20, yPos);
            doc.setFont('helvetica', 'normal');
            yPos += 6;

            doc.setFontSize(10);
            doc.setTextColor(secondaryColor);
            const desc = job.desc;
            desc.forEach((d: string) => {
                const lines = doc.splitTextToSize('• ' + d, 165);
                doc.text(lines, 25, yPos);
                yPos += lines.length * 5;
            });
            yPos += 5;
        });

        // Education
        yPos += 5;
        doc.setFontSize(16);
        doc.setTextColor(primaryColor);
        doc.text(t.education.title, 20, yPos);
        yPos += 10;

        doc.setFontSize(12);
        doc.setTextColor(textColor);
        doc.text(t.education.degree1, 20, yPos);
        yPos += 6;
        doc.text(t.education.degree2, 20, yPos);
        yPos += 15;

        // Skills
        doc.setFontSize(16);
        doc.setTextColor(primaryColor);
        doc.text(t.skills.title, 20, yPos);
        yPos += 10;

        doc.setFontSize(10);
        doc.setTextColor(textColor);
        doc.text(`${t.skills.backend}: Java, Spring Boot, Flask, RESTful APIs`, 20, yPos);
        yPos += 6;
        doc.text(`${t.skills.frontend}: Angular, TypeScript, RxJS, NgRx, Bootstrap`, 20, yPos);
        yPos += 6;
        doc.text(`${t.skills.database}: PostgreSQL, MySQL, H2`, 20, yPos);
        yPos += 6;
        doc.text(`${t.skills.architecture}: Microservices, Clean Architecture, Design Patterns`, 20, yPos);
        yPos += 6;
        doc.text(`${t.skills.devops}: Docker, CI/CD, Jenkins, GitHub Actions, Git`, 20, yPos);
        yPos += 6;
        doc.text(`${t.skills.methodologies}: Agile / Scrum, Jira, TDD, UML`, 20, yPos);

        // Save
        doc.save(`Fekhreddine_ARRAG_Resume_${lang.toUpperCase()}.pdf`);
    }
}

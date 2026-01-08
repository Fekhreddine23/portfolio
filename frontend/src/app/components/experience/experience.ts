import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService, Experience as ExperienceModel } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit {
  experiences: ExperienceModel[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef, public translationService: TranslationService) { }

  getResponsibilities(job: ExperienceModel): string[] {
    const lang = this.translationService.currentLang();
    if (lang === 'fr' && job.responsibilitiesFr && job.responsibilitiesFr.length > 0) {
      return job.responsibilitiesFr;
    }
    return job.responsibilities;
  }

  ngOnInit() {
    this.apiService.getResume().subscribe({
      next: (data) => {
        this.experiences = data.experience || [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}

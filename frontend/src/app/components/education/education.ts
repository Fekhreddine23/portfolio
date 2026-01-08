import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService, Education as EducationModel } from '../../services/api.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit {
  degrees: EducationModel[] = [];
  certifications: EducationModel[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.apiService.getResume().subscribe(data => {
      // Filter the education list into two categories
      this.degrees = data.education.filter(e => e.type === 'DEGREE' || !e.type);
      this.certifications = data.education.filter(e => e.type === 'CERTIFICATION');
      this.cdr.detectChanges();
    });
  }
}

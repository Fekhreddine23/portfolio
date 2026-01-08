import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  skills: { [key: string]: string[] } = {};
  categories: string[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.apiService.getResume().subscribe(data => {
      console.log('Resume Data Received:', data);
      console.log('Skills Data:', data.skills);
      this.skills = data.skills;
      this.categories = Object.keys(this.skills);
      console.log('Extracted Categories:', this.categories);
      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching resume:', error);
    });
  }
}

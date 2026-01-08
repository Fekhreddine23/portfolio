import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private pdfService: PdfService) { }

  downloadResume(event: Event) {
    event.preventDefault();
    this.pdfService.generateResume();
  }
}

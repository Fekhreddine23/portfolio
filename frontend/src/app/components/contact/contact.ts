import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService, ContactMessage } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  message: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  loading = false;
  success = false;
  error = false;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  onSubmit() {
    this.loading = true;
    this.error = false;
    this.success = false;

    // EmailJS Configuration
    const serviceID = 'service_2sz03ma';
    const templateID = 'template_d5hy236';
    const publicKey = 'kWyxCaeBrzLZ7L2ek';

    const templateParams = {
      from_name: this.message.name,
      from_email: this.message.email,
      subject: this.message.subject,
      message: this.message.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          this.ngZone.run(() => {
            this.loading = false;
            this.success = true;
            this.message = { name: '', email: '', subject: '', message: '' };
            this.cdr.detectChanges();
            console.log('SUCCESS!', response.status, response.text);
          });
        },
        (err) => {
          this.ngZone.run(() => {
            this.loading = false;
            this.error = true;
            this.cdr.detectChanges();
            console.log('FAILED...', err);
          });
        },
      );
  }
}

import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
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

    this.apiService.sendMessage(this.message)
      .pipe(finalize(() => {
        this.ngZone.run(() => {
          this.loading = false;
          this.cdr.detectChanges();
        });
      }))
      .subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.loading = false;
            this.success = true;
            this.message = { name: '', email: '', subject: '', message: '' };
            this.cdr.detectChanges();
          });
        },
        error: (err) => {
          this.ngZone.run(() => {
            this.loading = false;
            this.error = true;
            this.cdr.detectChanges();
          });
        }
      });
  }
}

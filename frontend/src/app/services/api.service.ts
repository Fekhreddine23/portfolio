import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  responsibilitiesFr?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
  type?: string; // "DEGREE" | "CERTIFICATION"
  url?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: { [key: string]: string[] };
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/portfolio';

  constructor(private http: HttpClient) { }

  getResume(): Observable<ResumeData> {
    return this.http.get<ResumeData>(`${this.apiUrl}/resume`);
  }

  sendMessage(message: ContactMessage): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, message);
  }
}

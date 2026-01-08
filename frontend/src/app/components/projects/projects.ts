import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}

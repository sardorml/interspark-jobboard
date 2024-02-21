import { Component, Input } from '@angular/core';
import { Job } from '../../interfaces/job.type';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
})
export class JobItemComponent {
  @Input() jobItem!: Job;
}

import { Component } from '@angular/core';
import { Job } from '../../interfaces/job.type';
import { JobService } from '../../services/job.service';
import { JobItemComponent } from '../../components/job-item/job-item.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  imports: [
    JobItemComponent,
    HeaderComponent,
    ButtonComponent,
    RouterLink,
    SkeletonLoaderComponent,
  ],
})
export class JobsComponent {
  jobs: Job[] = [];
  isLoading: boolean = false;

  constructor(private JobService: JobService) {}

  ngOnInit(): void {
    this.JobService.getJobs().subscribe((jobs) => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.jobs = jobs;
      }, 400);
    });
  }
}

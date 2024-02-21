import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { DateInputComponent } from '../../components/date-input/date-input.component';
import { FormFields } from '../../globals';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job.type';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    DateInputComponent,
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent {
  @Input() id = '';
  formFields = FormFields;

  applyForm = new FormGroup({
    jobNumber: new FormControl(''),
    title: new FormControl(''),
    startDate: new FormControl(''),
    closeDate: new FormControl(''),
    notes: new FormControl(''),
    numberOfOpenings: new FormControl(''),
    isExpRequired: new FormControl(''),
  });

  constructor(
    private JobService: JobService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.JobService.getJobDetail(this.id).subscribe((job) => {
      const formJob = {
        title: job.job_title,
        jobNumber: job.job_number,
        startDate: job.job_start_date,
        closeDate: job.job_close_date,
        notes: job.job_notes,
        numberOfOpenings: job.number_of_openings,
        isExpRequired: 'yes',
      };
      this.applyForm.setValue(formJob);
    });
  }

  submitForm() {
    const dataset = this.applyForm.value;

    const newJob: Job = {
      job_number: dataset.jobNumber!,
      job_title: dataset.title!,
      job_start_date: dataset.startDate!,
      job_close_date: dataset.closeDate!,
      job_notes: dataset.notes!,
      number_of_openings: dataset.numberOfOpenings!,
      experience_required: true,
    };
    this.JobService.updateJob(this.id, newJob).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { DateInputComponent } from '../../components/date-input/date-input.component';
import { FormFields } from '../../globals';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-job',
  standalone: true,
  templateUrl: './new-job.component.html',
  styleUrl: './new-job.component.css',
  imports: [
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    DateInputComponent,
    FontAwesomeModule,
  ],
})
export class NewJobComponent {
  formFields = FormFields;
  faChevronLeft = faChevronLeft;

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

  submitForm() {
    console.log('submit');
    console.log(this.applyForm.value);
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
    this.JobService.addJob(newJob).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}

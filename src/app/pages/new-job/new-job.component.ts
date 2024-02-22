import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { DateInputComponent } from '../../components/date-input/date-input.component';
import { FormFields } from '../../globals';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CheckInputComponent } from '../../components/check-input/check-input.component';

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
    CheckInputComponent,
  ],
})
export class NewJobComponent {
  formFields = FormFields;
  faChevronLeft = faChevronLeft;

  applyForm = new FormGroup({
    jobNumber: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    closeDate: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
    numberOfOpenings: new FormControl('', Validators.required),
    isExpRequired: new FormControl(''),
  });

  constructor(
    private JobService: JobService,
    private router: Router,
  ) {}

  submitForm() {
    const dataset = this.applyForm.value;
    if (this.applyForm.status == 'INVALID') {
      alert('Please fill out all the fields');
    } else {
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
}

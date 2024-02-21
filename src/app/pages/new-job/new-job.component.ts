import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { Input } from '../../interfaces/input.type';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { DateInputComponent } from '../../components/date-input/date-input.component';
import { FormFields } from '../../globals';

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
  ],
})
export class NewJobComponent {
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

  submitForm() {
    console.log('submit');
    console.log(this.applyForm.value);
  }
}

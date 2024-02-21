import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DateInputComponent {
  @Input() name: string = 'default';
  @Input() title: string = 'default';
}

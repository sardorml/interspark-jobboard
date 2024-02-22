import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-check-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './check-input.component.html',
  styleUrl: './check-input.component.css',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CheckInputComponent {
  @Input() name: string = 'default';
  @Input() title: string = 'default';
}

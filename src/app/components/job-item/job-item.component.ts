import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../interfaces/job.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
})
export class JobItemComponent {
  @Input() jobItem!: Job;
  @Output() handleDelete = new EventEmitter();
  @Output() handleClick = new EventEmitter();
  faTrash = faTrash;

  deleteJob() {
    this.handleDelete.emit();
  }
  clickJob() {
    this.handleClick.emit();
  }
}

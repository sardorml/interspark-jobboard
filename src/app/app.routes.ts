import { Routes } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { NewJobComponent } from './pages/new-job/new-job.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    children: [
      {
        path: '',
        component: JobsComponent,
      },
      {
        path: 'new',
        component: NewJobComponent,
      },
      {
        path: ':id',
        component: JobDetailComponent,
      },
    ],
  },
];

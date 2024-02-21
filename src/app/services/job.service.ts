import { Injectable } from '@angular/core';
import { Job } from '../interfaces/job.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private ApiUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.ApiUrl);
  }
  deleteJob(id: string) {
    return this.http.delete(this.ApiUrl + `/${id}`);
  }
  addJob(job: Job) {
    return this.http.post(this.ApiUrl, job);
  }
  getJobDetail(id: string) {
    return this.http.get<Job>(this.ApiUrl + `/${id}`);
  }
  updateJob(id: string, job: Job) {
    return this.http.put(this.ApiUrl + `/${id}`, job);
  }
}

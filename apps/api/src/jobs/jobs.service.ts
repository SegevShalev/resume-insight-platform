import { Injectable } from '@nestjs/common';
import { Job } from './types/job.type';

@Injectable()
export class JobsService {
  private jobs: Record<string, Job> = {};

  createJob() {
    const id = Math.random().toString(36).substring(2, 10);

    const job: Job = {
      id,
      status: 'CREATED',
      createdAt: new Date(),
    };

    this.jobs[id] = job;

    return job;
  }

  getAllJobs() {
    return Object.values(this.jobs);
  }

  getJob(id: string) {
    return this.jobs[id] || null;
  }
}

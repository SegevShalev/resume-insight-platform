import { Controller, Get, Post, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import type { Job } from './types/job.type';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  createJob(): Job {
    return this.jobsService.createJob();
  }

  @Get()
  getAll(): Job[] {
    return this.jobsService.getAllJobs();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Job | null {
    return this.jobsService.getJob(id);
  }
}

import { Injectable } from '@nestjs/common';
import { JobsService } from '../jobs/jobs.service';

@Injectable()
export class UploadsService {
  constructor(private readonly jobsService: JobsService) {}

  handleUpload(file: Express.Multer.File) {
    const job = this.jobsService.createJob();

    return {
      jobId: job.id,
      status: job.status,
      filename: file.originalname,
      size: file.size,
    };
  }
}

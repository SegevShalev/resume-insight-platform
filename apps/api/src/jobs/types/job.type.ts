export type JobStatus = 'CREATED' | 'PROCESSING' | 'DONE';

export interface Job {
  id: string;
  status: JobStatus;
  createdAt: Date;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [JobsModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

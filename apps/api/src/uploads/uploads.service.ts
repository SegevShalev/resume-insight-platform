import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  upload(file: Express.Multer.File) {
    console.log(file.originalname);
    console.log(file.size);
  }
}

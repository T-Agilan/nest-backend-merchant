import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  PutHello(): string {
    return 'Hello krishna!';
  }
}
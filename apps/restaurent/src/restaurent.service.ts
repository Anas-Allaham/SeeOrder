import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurentService {
  getHello(): string {
    return 'Hello World!';
  }
}

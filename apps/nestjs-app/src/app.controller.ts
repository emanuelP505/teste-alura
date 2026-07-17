import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('users')
  getUsers(): string {
    return 'ola mundo';
  }
}

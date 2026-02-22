import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      message: 'NestJS API running on Vercel!',
      time: new Date().toISOString()
    };
  }

  @Get()
  root() {
    return { message: 'ERP API root - works!' };
  }
}
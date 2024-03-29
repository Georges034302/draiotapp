import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';



@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(): string {
    return 'on';
  }
}

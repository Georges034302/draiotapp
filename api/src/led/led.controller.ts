import { LedService } from './led.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('led')
export class LedController {
  constructor(private readonly ledService: LedService) {}

  @Get()
  getStatus(): string {
    return 'on';
  }

  @Post()
  turnOnOff(@Req() req: Request): boolean {
    const operation: boolean = req.body.operation === 'on' ? true : false;
    const color: string = req.body.color || '';
    console.log(color, operation);
    this.ledService.operateRedLed(color, operation);
    return operation;
  }
}

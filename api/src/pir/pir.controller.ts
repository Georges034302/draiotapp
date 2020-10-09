import { PirService } from './pir.service';
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import PIR from '../model/pir';
@Controller('pir')
export class PirController {
  constructor(private readonly pirService: PirService) {}

  @Get()
  getStatus() {
    try {
      const data = PIR.findOne({username: 'Georges034302'})
      return data;
    } catch {
      return [];
    }
  }

  @Post()
  turnOnOff(@Req() req: Request): boolean {
    const operation: boolean = req.body.operation === 'on' ? true : false;
    this.pirService.turnOnOff(operation);
    // this.ledService.operateRedLed(color, operation);
    return operation;
  }
}

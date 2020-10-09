import { UltraService } from './ultra.service';
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import Distance from '../model/distance';

@Controller('ultra')
export class UltraController {

    constructor(private readonly ultraService: UltraService) {}

  @Post()
  turnOnOff(@Req() req: Request): boolean {

    const operation: boolean = req.body.operation === 'on' ? true : false;
    this.ultraService.turnOnOff(operation);
    // this.ledService.operateRedLed(color, operation);
    return operation;
  }

  @Get()
  getDataAndStatus(): any {
      try {
        const data = Distance.findOne({username: 'Georges034302'})
        return data
      } catch {
        return [];
      }
  };
}

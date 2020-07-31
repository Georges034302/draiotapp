import { SegmentDisplayService } from './segment-display.service';
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import Segment from '../model/segment'
@Controller('segment-display')
export class SegmentDisplayController {

    constructor(private readonly segmentDisplayService: SegmentDisplayService) { }

    @Get()
    getStatus(): any {
        try {
            const data = Segment.findOne({username: 'joel1010'})
            return data;
          } catch {
            return [];
          }
    }

    @Post('numbers')
    displayNumbers(@Req() req: Request): string {
        const numbers: string = req.body.numbers;
        this.segmentDisplayService.displayNumbers(numbers);
        return numbers;
    }


    @Post()
    turnOnOff(@Req() req: Request): boolean {
        const operation: boolean = req.body.operation === 'on' ? true : false;
        this.segmentDisplayService.turnOnOff(operation);
        return operation;
    }

}

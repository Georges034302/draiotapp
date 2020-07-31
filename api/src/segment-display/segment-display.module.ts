import { Module } from '@nestjs/common';
import { SegmentDisplayController } from './segment-display.controller';
import { SegmentDisplayService } from './segment-display.service';

@Module({
  controllers: [SegmentDisplayController],
  providers: [SegmentDisplayService],
})
export class SegmentDisplayModule {}

import { Module } from '@nestjs/common';
import { LedController } from './led.controller';
import { LedService } from './led.service';

@Module({
  controllers: [LedController],
  providers: [LedService]
})
export class LedModule {}
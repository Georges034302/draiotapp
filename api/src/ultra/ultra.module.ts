import { Module } from '@nestjs/common';
import { UltraController } from './ultra.controller';
import { UltraService } from './ultra.service';

@Module({
  controllers: [UltraController],
  providers: [UltraService]
})
export class UltraModule {}

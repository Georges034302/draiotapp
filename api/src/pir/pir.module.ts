import { Module } from '@nestjs/common';
import { PirController } from './pir.controller';
import { PirService } from './pir.service';

@Module({
  controllers: [PirController],
  providers: [PirService]
})
export class PirModule {}

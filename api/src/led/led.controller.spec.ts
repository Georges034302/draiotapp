import { LedModule } from './led.module';
import { LedService } from './led.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LedController } from './led.controller';

describe('Led Controller', () => {
  let controller: LedController;
  let service: LedService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [LedModule],
    }).compile();

    controller = module.get<LedController>(LedController);    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

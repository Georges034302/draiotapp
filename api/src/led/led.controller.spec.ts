import { LedModule } from './led.module';
import { LedService } from './led.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LedController } from './led.controller';

describe('Led Controller', () => {
  let controller: LedController;
  let service: LedService

  beforeEach(async () => {

    // service = new LedService();
    // controller = new LedController(service);

    const module = await Test.createTestingModule({
      imports: [LedModule],
    }).compile();

    controller = module.get<LedController>(LedController);



    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [LedController],
    // }).compile();

    // controller = module.get<LedController>(LedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

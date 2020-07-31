import { UltraModule } from './ultra.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UltraController } from './ultra.controller';

describe('Ultra Controller', () => {
  let controller: UltraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UltraModule],
    }).compile();

    controller = module.get<UltraController>(UltraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

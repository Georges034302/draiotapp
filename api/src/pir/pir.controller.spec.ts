import { PirModule } from './pir.module';
import { Test, TestingModule } from '@nestjs/testing';
import { PirController } from './pir.controller';

describe('Pir Controller', () => {
  let controller: PirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PirModule],
    }).compile();

    controller = module.get<PirController>(PirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

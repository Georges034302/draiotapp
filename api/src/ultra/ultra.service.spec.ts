import { Test, TestingModule } from '@nestjs/testing';
import { UltraService } from './ultra.service';

describe('UltraService', () => {
  let service: UltraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UltraService],
    }).compile();

    service = module.get<UltraService>(UltraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

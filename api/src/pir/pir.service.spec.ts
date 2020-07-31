import { Test, TestingModule } from '@nestjs/testing';
import { PirService } from './pir.service';

describe('PirService', () => {
  let service: PirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PirService],
    }).compile();

    service = module.get<PirService>(PirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { SegmentDisplayModule } from './segment-display.module';
import { Test, TestingModule } from '@nestjs/testing';
import { SegmentDisplayService } from './segment-display.service';

describe('SegmentDisplayService', () => {
  let service: SegmentDisplayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SegmentDisplayModule],
    }).compile();

    service = module.get<SegmentDisplayService>(SegmentDisplayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should run displayNumbers', () => {
    service.displayNumbers('1234');
  });

  it('should turn off the segment', () => {
    service.turnOnOff(false);
  });

  it('should turn on the segment', () => {
    service.turnOnOff(true);
  });
});

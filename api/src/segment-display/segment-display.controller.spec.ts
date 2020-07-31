import { AppModule } from './../app.module';
import { SegmentDisplayModule } from './segment-display.module';
import { SegmentDisplayService } from './segment-display.service';
import { Test } from '@nestjs/testing';
import { SegmentDisplayController } from './segment-display.controller';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { HttpService, HttpModule } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('SegmentDisplay Controller', () => {
  let controller: SegmentDisplayController;
  let service: SegmentDisplayService;
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    service = new SegmentDisplayService();
    controller = new SegmentDisplayController(service);

    const module = await Test.createTestingModule({
      imports: [SegmentDisplayModule, HttpModule, AppModule],
    }).compile();

    app = module.createNestApplication();
    httpService = module.get<HttpService>(HttpService);

    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should turn on segment | POST /segment-display', async () => {
    const result: AxiosResponse = {
      data: {
        operation: 'on',
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(result));

    const expectedOperation = 'true';

    const response = await request(app.getHttpServer())
      .post('/segment-display')
      .send({ operation: 'on' })
      .expect(201);
    expect(response.text).toEqual(expectedOperation);
  });

  it('should send numbers to segment | POST /segment-display/numbers', async () => {
    const result: AxiosResponse = {
      data: {
        numbers: '1234',
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(result));

    const expectedOperation = '1234';

    const response = await request(app.getHttpServer())
      .post('/segment-display/numbers')
      .send({ numbers: '1234' })
      .expect(201);
    expect(response.text).toEqual(expectedOperation);
  });

  afterAll(async () => {
    await app.close();
  });
});

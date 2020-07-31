import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {

  private config: ConfigService;
  constructor(config: ConfigService) {
    this.config = config;
  }

  getHello(): object {
    return {hello: 'Hello World cac!' + this.config.get("DB_HOST")};
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as path from 'path';
import * as express from 'express';
// import bodyParser from 'body-parser'
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // await app.use(bodyParser())
  await app.listen(process.env.PORT || 4000);


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }


}
bootstrap();

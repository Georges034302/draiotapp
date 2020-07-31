import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SegmentDisplayModule } from './segment-display/segment-display.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LedModule } from './led/led.module';
import { UltraModule } from './ultra/ultra.module';
import { PirModule } from './pir/pir.module';

import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ConfigModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    SegmentDisplayModule,
    LedModule,
    UltraModule,
    PirModule,
    // PassportModule,

  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyConfigModule } from './config/config.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [MyConfigModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

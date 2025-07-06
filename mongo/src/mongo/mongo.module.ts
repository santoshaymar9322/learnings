import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

interface MongoConfig {
  user: string;
  password: string;
  db: string;
  port: string;
  host: string;
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const mongoConfig = configService.get<MongoConfig>('mongo');
        const uri = `mongodb://${mongoConfig?.host}:${mongoConfig?.port}/${mongoConfig?.db}`;
        return {
          uri,
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class MongoModule {}

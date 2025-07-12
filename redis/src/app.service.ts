import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateDataDto } from './dtos/create-data.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getData(createDataDto:CreateDataDto): Promise<string | undefined> {
      const value = await  this.cacheManager.get<string>(createDataDto.key)
      return value
  }

  async postData(createDataDto: CreateDataDto){
    console.log("sky create data", createDataDto)
    await this.cacheManager.set(createDataDto.key,createDataDto.value)
  }

  async deleteData(createDataDto: CreateDataDto){
    await this.cacheManager.del(createDataDto.key)
  }
}

import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDataDto } from './dtos/create-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(@Body() createDataDto:CreateDataDto) {
    try{
      const value = await this.appService.getData(createDataDto)
      return value
    }
    catch(error){
      console.log(error)
      return error
    }
  }

  @Post()
  async PostData(@Body() createDataDto: CreateDataDto){
    try{
      await this.appService.postData(createDataDto)
      return "Sucess"
    }
    catch(error){
      console.log(error)
      return error
    }
  }

  @Delete()
  async deleteData( @Body() createDataDto:CreateDataDto) {
    try {
      return await this.appService.deleteData(createDataDto);
      
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

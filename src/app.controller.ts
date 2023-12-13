import { Controller, Get, Param, Put, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('store')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getHell(@Param('id') id: string): string {
    return id;
  }
  @Put()
  PutHello(): string {
    return 'i am anew to nest js';
  }
  @Post()
  create(@Body('name') name: string, @Body('age') age: number): string {
    return 'hi' + name + 'age is ' + age;
  }
}
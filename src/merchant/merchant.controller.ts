// import { Controller } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { merchantDTO } from './merchantdto';
import { Merchant } from './merchant.interface';

@Controller('merchant')
export class MerchantController {
  constructor(private merchantservice: MerchantService) {}

  @Get('/')
  async getMerchant(): Promise<Merchant[]> {
    return this.merchantservice.getMerchant();
  }
  @Post('/')
  async createMerchant(@Body() data: merchantDTO): Promise<Merchant> {
    const createdMerchant = await this.merchantservice.createMerchant(data);
    console.log(createdMerchant);
    return createdMerchant;
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPerson: Merchant,
  ): Promise<Merchant> {
    return this.merchantservice.update(id, updatedPerson); // Fix the case here
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.merchantservice.delete(id); // Fix the case here
  }
}

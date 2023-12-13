import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { merchantSchema } from './merchant.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Merchant', schema: merchantSchema }]),
      ],
  controllers: [MerchantController],
  providers: [MerchantService]
})
export class MerchantModule {}

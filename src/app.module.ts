import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { MerchantModule } from './merchant/merchant.module';

const connectionString= 'mongodb+srv://Agilan:3cQMZtVhRzaGBdb7@cluster0.mqvjmje.mongodb.net/formData'

@Module({

  imports: [MongooseModule.forRoot(connectionString), MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
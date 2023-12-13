import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { merchantDTO } from './merchantdto';
import { Merchant } from './merchant.interface';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel('Merchant') private readonly merchantModel: Model<Merchant>,
  ) {}
  getMerchant(): Promise<Merchant[]> {
    return this.merchantModel.find().exec();
  }

  async createMerchant(data: merchantDTO): Promise<Merchant> {
    const Merchant = new this.merchantModel(data);
    return await Merchant.save();
  }
  async update(id: string, updatedPerson: Merchant): Promise<Merchant> {
    return this.merchantModel.findByIdAndUpdate(id, updatedPerson, {
      new: true,
    });
  }
  async delete(id: string): Promise<void> {
    await this.merchantModel.findByIdAndDelete(id);
  }
}

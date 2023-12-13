import mongoose from 'mongoose';
export const merchantSchema = new mongoose.Schema({
  fname: String,
  mail: String,
  number: String,
  website: String,
  contactName: String,
  contactPhone: String,
  contactMail: String,
  notes: String,
  type: String,
  category: String,
  percentage: Number,
  activeFrom: String,
  criticalAccount: Boolean,
  paymentOptions: String,
});
export const MerchantModel = mongoose.model('Merchant', merchantSchema);
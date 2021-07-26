import { Schema, model, Document } from 'mongoose'

interface TransactionHistoryInterface extends Document {
    accountNumber: number,
    transactionType: string,
    value: number
}

const TransactionHistorySchema = new Schema({
  accountNumber: Number,
  transactionType: String,
  value: Number
}, {
  timestamps: true
})

export default model<TransactionHistoryInterface>('TransactionHistory', TransactionHistorySchema)

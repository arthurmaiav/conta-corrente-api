import { Schema, model, Document } from 'mongoose'

interface BankAccountInterface extends Document {
  accountNumber: number,
  balance: number
}

const BankAccountSchema = new Schema({
  accountNumber: Number,
  balance: Number
}, {
  timestamps: true
})

export default model<BankAccountInterface>('BankAccount', BankAccountSchema)

import { Schema, model, Document } from 'mongoose'

interface ContaCorrenteInterface extends Document {
  numero: number,
  saldo: number
}

const ContaCorrenteSchema = new Schema({
  numero: Number,
  saldo: Number
}, {
  timestamps: true
})

export default model<ContaCorrenteInterface>('ContaCorrente', ContaCorrenteSchema)

import { Schema, model, Document } from 'mongoose'

interface HistoricoTransacaoInterface extends Document {
    numeroConta: number,
    tipoTransacao: string,
    valor: number
}

const HistoricoTransacaoSchema = new Schema({
  numeroConta: Number,
  tipoTransacao: String,
  valor: Number
}, {
  timestamps: true
})

export default model<HistoricoTransacaoInterface>('HistoricoTransacao', HistoricoTransacaoSchema)

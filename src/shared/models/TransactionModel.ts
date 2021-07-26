export class TransactionModel {
    accountNumber: number
    value: number
    transactionType: string

    constructor (accountNumber: number, value: number, transactionType: string) {
      this.accountNumber = accountNumber
      this.value = value
      this.transactionType = transactionType
    }
}

import cron from 'node-cron'
import BankAccountController from '../controllers/BankAccountController'

class AccountYieldJob {
  async scheduleYield (accountNumber: number) {
    cron.schedule('0 0 0 * * *', function () {
      BankAccountController.getOne(accountNumber).then(bankAccount => {
        if (bankAccount.balance > 0) {
          const revenue = (bankAccount.balance * 0.02)
          BankAccountController.updateBalance(accountNumber, revenue)
        }
      })
    })
  }
}

export default new AccountYieldJob()

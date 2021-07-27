import cron from 'node-cron'

class AccountYieldJob {
  async scheduleYield () {
    cron.schedule('0 0 0 * * *', function () {
      console.log('Midnight!')
    })
  }
}

export default new AccountYieldJob()

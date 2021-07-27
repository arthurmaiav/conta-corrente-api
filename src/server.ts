import app from './app'
import AccountYieldJob from './modules/account/job/AccountYieldJob'

AccountYieldJob.scheduleYield()

app.listen(3333)

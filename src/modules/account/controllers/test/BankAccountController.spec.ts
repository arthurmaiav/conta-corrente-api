import BankAccountController from '../BankAccountController'

describe('BankAccountController'), () => {

    test('should get one account', async () => {
        (BankAccountController.listOne as jest.MockedFunction<any>).mockResolvedValueOnce([{ accountNumber:  12345}]);
    
        const mReq = {
            accountNumber: 12345,
          };
          const mRes = {
            accountNumber: jest.fn().mockReturnThis(),
          };

          await BankAccountController.listOne(mReq, mRes);
    }
}
describe('BankAccount', function() {
  it('Creates new bank account', function() {
    var newBankAccount = new BankAccount('Illia', 2000000);
    expect(newBankAccount.balance).to.equal(2000000);
    expect(newBankAccount.userName).to.equal('Illia');
  });

  it('withdraws requested amount', function() {
    var newBankAccount = new BankAccount('Illia', 2000000);
    newBankAccount.updateAmount(1000000, 'W');
    expect(newBankAccount.balance).to.equal(1000000);
  });

  it('deposits requested amount', function() {
    var newBankAccount = new BankAccount('Illia', 2000000);
    newBankAccount.updateAmount(1000000, 'D');
    expect(newBankAccount.balance).to.equal(3000000);
  });
});

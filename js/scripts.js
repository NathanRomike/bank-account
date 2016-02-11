function BankAccount (name, amount) {
  this.userName = name;
  this.balance = amount;
}

BankAccount.prototype.updateAmount = function(amount, flag) {
  if (flag === "D") {
    this.balance += amount;
  } else {
    this.balance -= amount;
  }
}

$(document).ready(function() {
  $("form.add-user").submit(function(event) {
    event.preventDefault();
    var inputtedUserName = $(this).find("input#new-name").val();
    var inputtedinitial = parseInt($(this).find("input#initial-deposit").val());
    var newUser = new BankAccount(inputtedUserName, inputtedinitial);

    $("h3#balance").text(newUser.balance);
    $(".add-user").hide();
    $(".balance").show();
    $(".hidden-initdeposit").show();
    $(".update-amount").show();

    $("form.update-amount").submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($(this).find("input#deposit-amount").val());
      var withdraw = parseInt($(this).find("input#withdraw-amount").val());

      if (deposit = "NaN") {
        newUser.updateAmount(withdraw, "W");
      } else {
        newUser.updateAmount(deposit, "D");
      }

      $("h3#balance").text(newUser.balance);

    });
  });
});

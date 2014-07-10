var chalk = require('chalk');
var prompt = require('sync-prompt').prompt;

var balance = 1000;
balance = parseFloat(balance);
//balance = balance.toFixed(2);

var withdraws = [];
var deposits = [];

var input;
var amount;

console.log('Your balance is: $' + balance)

while(input != 'q'){
  input = prompt('What would you like to do: (d)eposit, (w)ithdraw, or (q)uit: ');

  if(input === 'd'){
    amount = prompt('How much money would you like to deposit? ');
    amount = parseFloat(amount);
   // amount = amount.toFixed(2);
    deposits.push(amount);
    console.log('You have deposited $' + amount.toFixed(2));
    balance += amount
    console.log('Your new balance is: $' + balance.toFixed(2))
    //input = prompt('What would you like to do: (d)eposit, (w)ithdraw, or (q)uit ');
 
  }else if(input === 'w'){
    amount = prompt('How much money would you like to withdraw? ');
    amount = parseFloat(amount);
 //   amount = amount.toFixed(2);
    withdraws.push(amount);
    console.log('You have withdrawn $' + amount.toFixed(2));
    balance -= amount
    console.log('Your new balance is: $' + balance.toFixed(2))
    //input = prompt('What would you like to do: (d)eposit, (w)ithdraw, or (q)uit ');
  }
}  

var totalDeposit = 0;
totalDeposit = parseFloat(totalDeposit);
//totalDeposit = totalDeposit.toFixed(2);

var totalWithdraw = 0;
totalWithdraw = parseFloat(totalWithdraw);
//totalWithdraw = totalWithdraw.toFixed(2);

for(var i = 0; i < deposits.length; i++){
  totalDeposit += deposits[i];
}

for(var i = 0; i < withdraws.length; i++){
  totalWithdraw += withdraws[i];
}

//console.log(deposits)
console.log('Your total deposits were: $' + chalk.green(totalDeposit.toFixed(2)));
//console.log(withdraws)
console.log('Your total withdrawals were: $' + chalk.red(totalWithdraw.toFixed(2)));

balance = balance + totalDeposit - totalWithdraw;

if(balance >= 0){
  console.log('Your balance is: $' + balance.toFixed(2) + '. Have a nice day!');
}else{
  balance = balance - 50;
  console.log('You have a been charged a $50 overdraft fee. Your new balance is: $' + balance.toFixed(2) + '. Have a nice day!')
}



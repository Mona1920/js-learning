const accountId = 144553;
let account_Email ="monalisha@yopmail.com";
var accountPassword = "12345";
accountCity = "Andaman";

let accountState;

// accountId = 2 // not allowed 

account_Email = "hc@hc.com";
accountPassword = "1234678";
accountCity = "Bengaluru";

console.log(accountId);


/*
prefer not to use var because of the issue in block scope  and functional scope
 */

console.table([accountId, account_Email, accountPassword, accountCity, accountState]);
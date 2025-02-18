const accountId = 123456
let accountEmail = "mazhar@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState; //undefined statement//

//accountId = 456789 // not allowed

accountEmail = "ali@gmail.com"
accountPassword = "45678"
accountCity = "udaipur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ask the user for length
  // (Minimum of 8 characters, maximium of 128)
  //parseInt convers it to a number
  let passwordLength = parseInt(prompt("How long should the password be?"));
  // validate Length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length.\nPlease choose a password greater than 8 and less than 128 characters.");
  // prints out blank so it doesnt show undefined
    return "";
  }

  // Ask the user for which characters to include

  var includeLowerCase = confirm("Include lowercase letters in password?");
  var includeUpperCase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers letters in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");

  // Validate types of characters
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types.\nPlease include at least one type of character.");
    return "";
  }

  // Generate a Random Password
  // adding the \ before the " tells the code to include the " and not end the quote
  let passwordCharacters = [];
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "1234567890";

  // todo handle other character types

  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
   }

   if (includeLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters.split(""));
   } 

   if (includeUpperCase) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters.split(""));
   } 
   if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numericCharacters.split(""));
   } 



let results = "";
for (var i = 0; i < passwordLength; i++){
  let randomIndex = Math.floor(Math.random()* passwordCharacters.length);
  let randomCharacter =passwordCharacters[randomIndex];
  results += randomCharacter;
}


//Return generated password
return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // ask the user for length
  // (Minimum of 8 characters, maximium of 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  // validate Length
  if (passwordLength < 8 || passwordLength >1 128) {
    alert("Error, invalid password length.\nPlease choose a password greater than 8 and less than 128 characters.");
    return "";
  }

  // Ask the user for which characters to include

var includeLowerCase = confirm ("Include lowercase letters in password?");
var includeUpperCase = confirm ("Include uppercase letters in password?");
var includeNumbers = confirm ("Include numbers letters in password?");
var includeSpecialCharacters = confirm ("Include special characters in password?");

// Validate types of characters
if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  alert("Error, invalid character types.\nPlease include at least one type of character.");
  return"";
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

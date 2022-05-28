// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creat function generatePassword
function generatePassword () {


  return aPassString; //"adfjghadkfla"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

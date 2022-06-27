var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ")", ")", "-", "-", "+", "=", "[", "{", "]", "}", "|", "<", ">", "?"];

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePasswordLength() {
  let passwordLength = parseInt(prompt("Enter the length of your desired password between 8 - 128 characters"));

  if (isNaN(passwordLength)) {
    alert("You must enter a numerical length.");
    return generatePasswordLength();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters long");
    return generatePasswordLength();
  }
  var possibleCharacters = [];

  console.log(passwordLength);
  var setSpecial = confirm("Would you like to use speical characters?");
  console.log(setSpecial);
  if (setSpecial) {possibleCharacters = possibleCharacters.concat(specialCharacters)};
  var setNumeric = confirm("Would you like to use numeric characters?");
  console.log(setNumeric);
  if (setNumeric) {possibleCharacters = possibleCharacters.concat(numeric)};
  var setUpperCase = confirm("Would you like to use uppercase characters?")
  console.log(setUpperCase);
  if (setUpperCase) {possibleCharacters = possibleCharacters.concat(upperCase)};
  var setLowerCase = confirm("Would you like to use lowercase characters?")
  console.log(setLowerCase);
  if (setLowerCase) {possibleCharacters = possibleCharacters.concat(lowerCase)};
  return {passwordLength, possibleCharacters};
};



// if (setLowerCase === false && setUpperCase === false && setNumeric === false && setSpecial === false) {
//     alert("You must choose at least one option.");
//     generatePassword();
//   }

// var passwordInputs = {
//   length: passwordLength,
//   special: setSpecial,
//   num: setNumeric,
//   upper: setUpperCase,
//   lower: setLowerCase,
// };

// console.log(passwordInputs);





// console.log(possibilities);
function buildPassword () {
  var passArray = [];
  var options = generatePasswordLength()
  for (let i = 0; i < options.passwordLength; i++) {
  var index = Math.floor(Math.random()*options.possibleCharacters.length);
  var digit = options.possibleCharacters[index]
  passArray.push(digit);
};
  return passArray.join("");
};

function writePassword() {
  var password = buildPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
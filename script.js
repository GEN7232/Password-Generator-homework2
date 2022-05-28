var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ")", ")", "-", "-", "+", "=", "[", "{", "]", "}", "|", "<", ">", "?"];
console.log(specialCharacters);

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numeric);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(upperCase);

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCase);

var passwordLength;

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
  console.log(passwordLength);
};

generatePasswordLength();

var setSpecial = confirm("Would you like to use speical characters?");
console.log(setSpecial);

var setNumeric = confirm("Would you like to use numeric characters?");
console.log(setNumeric);

var setUpperCase = confirm("Would you like to use uppercase characters?")
console.log(setUpperCase);

var setLowerCase = confirm("Would you like to use lowercase characters?")
console.log(setLowerCase);



var passwordInputs = {
  length: passwordLength,
  special: setSpecial,
  num: setNumeric,
  upper: setUpperCase,
  lower: setLowerCase,
};

console.log(passwordInputs);




if (setSpecial === true && setNumeric === true && setUpperCase === true && setLowerCase === true) {
  var possibilities = specialCharacters.concat(numeric,upperCase,lowerCase);
} else if (setSpecial === true && setNumeric === true && setUpperCase === true && setLowerCase === false) {
  var possibilities = specialCharacters.concat(numeric,upperCase);
} else if (setSpecial === true && setNumeric === true && setUpperCase === false && setLowerCase === true) {
  var possibilities = specialCharacters.concat(numeric, lowerCase);
} else if (setSpecial === true && setNumeric === false && setUpperCase === true && setLowerCase === true) {
  var possibilities = specialCharacters.concat(lowerCase, upperCase);
} else if (setSpecial === true && setNumeric === true && setUpperCase === false && setLowerCase === false) {
  var possibilities = specialCharacters.concat(numeric);
} else if (setSpecial === true && setNumeric === false && setUpperCase === false && setLowerCase === true) {
var possibilities = specialCharacters.concat(lowerCase);
} else if (setSpecial === true && setNumeric === false && setUpperCase === true && setLowerCase === false) {
  var possibilities = specialCharacters.concat(upperCase);
} else if (setSpecial === true && setNumeric === false && setUpperCase === false && setLowerCase === false) {
  var possibilities = specialCharacters;
} else if (setSpecial === false && setNumeric === true && setUpperCase === true && setLowerCase === true) {
  var possibilities = numeric.concat(lowerCase,upperCase);
} else if (setSpecial === false && setNumeric === true && setUpperCase === true && setLowerCase === false) {
  var possibilities = numeric.concat(upperCase);
} else if (setSpecial === false && setNumeric === true && setUpperCase === false && setLowerCase === true) {
  var possibilities = numeric.concat(lowerCase);
} else if (setSpecial === false && setNumeric === true && setUpperCase === false && setLowerCase === false) {
  var possibilities = numeric;
} else if (setSpecial === false && setNumeric === false && setUpperCase === true && setLowerCase === true) {
  var possibilities = upperCase.concat(lowerCase);
} else if (setSpecial ===  false && setNumeric === false && setUpperCase === true && setLowerCase === false) {
  var possibilities = upperCase;
} else if (setSpecial === false && setNumeric === false && setUpperCase === false && setLowerCase === true) {
  var possibilities = lowerCase;
} if (setSpecial === false && setNumeric === false && setUpperCase === false && setLowerCase === false) {
  alert("You must choose at least one option.");
};
console.log(possibilities);

var passArray = [];


for (let i = 0; i < passwordLength; i++) {
  passArray += possibilities[Math.floor(Math.random() * possibilities.passwordLength)];
};
console.log(passArray);

function writePassword() {
  var password = generatePasswordLength();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
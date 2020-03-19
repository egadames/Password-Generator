// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var character = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~'];

var upper = confirm("Upper");
var lower = confirm("lower");
var num = confirm("num");
var special = confirm("special");
var list = "";
var size = prompt("how many times")
var password = "";

var all = [upper,lower,num,special]

for (var i = 0; i < character.length; i++) {
    if (all[i] === true) {
        list = list + character[i];
    }
}
    
for (var i = 0; i < size; i++) {
    var character = Math.floor((Math.random() * list.length) + 1);
    password += list.charAt(character);
  }

alert(password)
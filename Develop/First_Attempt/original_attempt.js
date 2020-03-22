
// Assignment Code
var generateBtn = document.querySelector("#generate");


console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  var character = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~'];
  var upper = confirm("Upper");
  var lower = confirm("lower");
  var num = confirm("num");
  var special = confirm("special");
  var list = "";
 
  var password = "";
  
  var all = [upper,lower,num,special]
  
  do {
    
    size = prompt("What is the size of the password? No smaller than 8 // No larger than 128")
  }
  while (size < 8 || size > 128);

  // if(size < 8 || size > 128)
  // size = prompt("must be within 8-128")

  for (var i = 0; i < character.length; i++) {
      if (all[i] === true) {
          list = list + character[i];
      }
  }
      
  for (var i = 0; i < size; i++) {
      var character = Math.floor((Math.random() * list.length) + 1);
      password += list.charAt(character);
    }
      
  return(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

